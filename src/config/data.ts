import { RoleType } from '../screens/profileSetup/ChooseRoleScreen';
import { ICONS } from './icon';
import { IMAGES } from './image';

export interface BookingHistory {
  id: string;
  provider: {
    id: string;
    name: string;
    avatar: string;
  };
  date: string;
  service: {
    id: string;
    name: string;
  };
  amount: {
    value: number;
    currency: string;
  };
  status: string;
}

export type IconKey = keyof typeof ICONS;

export interface ServiceAmount {
  currency: string;
  value: number;
  time: string;
}

export interface Services {
  id: string;
  name: string;
  avatar: IconKey;
  amount: ServiceAmount;
  totalBookings: number;
}

export interface WorkshopDetails {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const INTRO_DATA = [
  {
    id: 1,
    title: 'Connect. Chat. Learn.',
    description:
      'Discover consultants, book live sessions, and participate in knowledge-rich workshops.',
    imagePath: IMAGES.img_intro1,
    buttonTitle: 'Next',
  },

  {
    id: 2,
    title: 'Diverse Cyber Expertise',
    description:
      'Explore top cybersecurity specialists and find the guidance you need.',
    imagePath: IMAGES.img_intro2,
    buttonTitle: 'Next',
  },

  {
    id: 3,
    title: 'Your Schedule, Simplified',
    description: 'Keep track of bookings, workshops and sessions effortlessly.',
    imagePath: IMAGES.img_intro3,
    buttonTitle: 'Next',
  },

  {
    id: 4,
    title: 'Expert-Led Workshops',
    description:
      'Learn directly from professionals across multiple fields, with practical insights and tools.',
    imagePath: IMAGES.img_intro4,
    buttonTitle: 'Get Started',
  },
];

export const ROLE_DATA: RoleType[] = [
  {
    role: 'client',
    description: 'I am looking for service',
    isChecked: true,
  },
  {
    role: 'consultant',
    description: 'I am service provider',
    isChecked: false,
  },
];

export const USER_DATA = [
  {
    userId: '01',
    email: 'manoj@gmail.com',
  },
];

export const bookingHistory: BookingHistory[] = [
  {
    id: 'CMX2031',
    provider: {
      id: 'PROVIDER_001',
      name: 'Kendall Musk',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    date: '2025-08-15',
    service: {
      id: 'SERVICE_001',
      name: 'Cloud Security',
    },
    amount: {
      value: 2500,
      currency: '$',
    },
    status: 'completed',
  },
  {
    id: 'CMX2032',
    provider: {
      id: 'PROVIDER_002',
      name: 'James Smith',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    date: '2025-08-12',
    service: {
      id: 'SERVICE_002',
      name: 'Network Security',
    },
    amount: {
      value: 1750,
      currency: '$',
    },
    status: 'completed',
  },
];

export const services: Services[] = [
  {
    id: 'SERVICE_001',
    name: 'Cloud Security',
    avatar: 'ic_cloudSecurity',
    amount: {
      currency: '$',
      value: 80,
      time: 'hr',
    },
    totalBookings: 500,
  },
  {
    id: 'SERVICE_002',
    name: 'Cybersecurity Program Development',
    avatar: 'ic_cyberSecurity',
    amount: {
      currency: '$',
      value: 60,
      time: 'hr',
    },
    totalBookings: 250,
  },
  {
    id: 'SERVICE_003',
    name: 'Cybersecurity Program Development',
    avatar: 'ic_cyberSecurity',
    amount: {
      currency: '$',
      value: 60,
      time: 'hr',
    },
    totalBookings: 250,
  },
  {
    id: 'SERVICE_004',
    name: 'Cybersecurity Program Development',
    avatar: 'ic_cyberSecurity',
    amount: {
      currency: '$',
      value: 60,
      time: 'hr',
    },
    totalBookings: 250,
  },
];

export const workshops: WorkshopDetails[] = [
  {
    id: 'WORKSHOP_01',
    title: 'Career Progression',
    date: '15-10-2025',
    startTime: '11:30 AM',
    endTime: '1:30 PM',
  },
  {
    id: 'WORKSHOP_02',
    title: 'Cloud Misconfiguration Exploits',
    date: '25-10-2025',
    startTime: '11:30 AM',
    endTime: '1:30 PM',
  },
  {
    id: 'WORKSHOP_03',
    title: 'Mastering Endpoint Protection',
    date: '21-08-2026',
    startTime: '11:00 AM',
    endTime: '1:00 PM',
  },
  {
    id: 'WORKSHOP_04',
    title: 'Introduction to Penetration Testing',
    date: '20-08-2026',
    startTime: '2:00 AM',
    endTime: '4:00 PM',
  },
];
