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
