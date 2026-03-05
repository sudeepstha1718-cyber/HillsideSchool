import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Hillside Assistant," a helpful, knowledgeable, and professional AI guide for Hillside English School in Pokhara, Nepal.
Your tone should be academic, polite, and encouraging.
You can answer questions about admissions (Pre-primary to +2), the Principal (Mr. Dil Kumar Bhattarai), location (Malepatan-12), and school activities.
The school motto is "Empowering minds, inspiring futures".
If asked about specific tuition fees or application deadlines, provide general estimates but advise checking the official admissions page or contacting the school office at 985-6031780.
Briefly summarize answers to keep the chat conversational.
Do not make up facts if you don't know them; politely suggest contacting the main office.
`;

export const chatWithVeritasAI = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the school servers at the moment (API Key missing).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We use the chat feature to maintain context
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};