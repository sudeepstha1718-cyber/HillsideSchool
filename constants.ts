import { NavItem, NoticeItem, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Academic Programs', href: '#academics' },
  { label: 'Notices', href: '#notices' },
  { label: 'Facilities', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS: StatItem[] = [
  { value: '1,200+', label: 'Students' },
  { value: '85+', label: 'Qualified Teachers' },
  { value: '100%', label: 'SEE Pass Rate' },
  { value: '25+', label: 'Years of Excellence' },
];

export const SCHOOL_NOTICES: NoticeItem[] = [
  {
    id: 1,
    date: 'OCT 25, 2023',
    title: 'Second Terminal Examination Routine 2080',
    type: 'Exam',
    link: '#'
  },
  {
    id: 2,
    date: 'OCT 22, 2023',
    title: 'Admission Open for Grade XI (Science & Management)',
    type: 'General',
    link: '#'
  },
  {
    id: 3,
    date: 'OCT 20, 2023',
    title: 'Notice regarding Winter Vacation',
    type: 'Holiday',
    link: '#'
  },
  {
    id: 4,
    date: 'OCT 18, 2023',
    title: 'Result of Inter-House Football Tournament',
    type: 'Event',
    link: '#'
  },
  {
    id: 5,
    date: 'OCT 15, 2023',
    title: 'Parent Teacher Meeting (PTM) for Grade 10',
    type: 'General',
    link: '#'
  }
];