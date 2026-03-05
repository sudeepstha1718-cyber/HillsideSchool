export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NoticeItem {
  id: number;
  date: string;
  title: string;
  type: 'General' | 'Exam' | 'Event' | 'Holiday';
  link: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}