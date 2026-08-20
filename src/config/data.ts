import { RoleType } from '../screens/profileSetup/ChooseRoleScreen';
import { IMAGES } from './image';

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

export const bookingHistory = [
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

export const services = [
  {
    id: 'SERVICE_001',
    name: 'Cloud Security',
    avatar: '../assets/icons/ic_cloudSecurity.png',
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
    avatar: '../assets/icons/ic_cyberSecurity.png',
    amount: {
      currency: '$',
      value: 60,
      time: 'hr',
    },
    totalBookings: 250,
  },
];
