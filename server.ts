import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import multer from "multer";
import rateLimit from "express-rate-limit";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "data.json");
const UPLOADS_DIR = path.join(__dirname, "uploads");

// Extend session type
declare module 'express-session' {
  interface SessionData {
    isAdmin: boolean;
  }
}

// Ensure data.json has a hashed password on startup
function initializeData() {
  if (!fs.existsSync(DATA_FILE)) {
    const defaultData = {
      popupAd: { enabled: true, title: "Admissions Open", subtitle: "Join Us", description: "Enroll now", image: "" },
      notices: [],
      contact: { phone1: "", phone2: "" },
      admin: { id: "admin", password: bcrypt.hashSync("password123", 10), recoveryPhone: "" }
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
  } else {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    if (data.admin && data.admin.password && !data.admin.password.startsWith("$2b$")) {
      data.admin.password = bcrypt.hashSync(data.admin.password, 10);
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    }
  }
}

initializeData();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use("/uploads", express.static(UPLOADS_DIR));

  // Session Configuration
  app.use(session({
    secret: "hillside-school-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  // Rate Limiting
  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login attempts per window
    message: { error: "Too many login attempts, please try again later." }
  });

  // Multer Configuration
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type. Only images and PDFs are allowed."));
      }
    },
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
  });

  // API Routes
  app.get("/api/data", (req, res) => {
    try {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      const clientData = JSON.parse(JSON.stringify(data));
      if (clientData.admin) delete clientData.admin.password;
      res.json(clientData);
    } catch (error) {
      res.status(500).json({ error: "Failed to read data" });
    }
  });

  app.post("/api/data", (req, res) => {
    if (!req.session.isAdmin) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    try {
      const newData = req.body;
      const currentData = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      
      if (newData.admin && !newData.admin.password) {
        newData.admin.password = currentData.admin.password;
      } else if (newData.admin && newData.admin.password) {
        newData.admin.password = bcrypt.hashSync(newData.admin.password, 10);
      }

      fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to save data" });
    }
  });

  app.get("/api/auth-check", (req, res) => {
    res.json({ isAdmin: !!req.session.isAdmin });
  });

  app.post("/api/login", loginLimiter, (req, res) => {
    console.log(`Login attempt for ID: ${req.body.id}`);
    try {
      const { id, password } = req.body;
      if (!id || !password) {
        console.log("Login failed: Missing ID or Password");
        return res.status(400).json({ error: "ID and Password are required" });
      }

      const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      
      if (data.admin.id === id && bcrypt.compareSync(password, data.admin.password)) {
        console.log("Login successful");
        req.session.isAdmin = true;
        res.json({ success: true });
      } else {
        console.log("Login failed: Invalid credentials");
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Login failed due to server error" });
    }
  });

  app.post("/api/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });

  app.post("/api/forgot-password", (req, res) => {
    try {
      const { phone } = req.body;
      const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      if (data.admin.recoveryPhone === phone) {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        res.json({ success: true, code }); 
      } else {
        res.status(404).json({ error: "Phone number not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Recovery failed" });
    }
  });

  app.post("/api/reset-password", (req, res) => {
    try {
      const { newPassword } = req.body;
      const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      data.admin.password = bcrypt.hashSync(newPassword, 10);
      fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Reset failed" });
    }
  });

  app.post("/api/upload", upload.single("file"), (req: any, res) => {
    if (!req.session.isAdmin) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ success: true, url: fileUrl });
  });

  // Error handling middleware
  app.use((err: any, req: any, res: any, next: any) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Upload error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
