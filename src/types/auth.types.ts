export type Role = 'client' | 'consultant';

export interface UserProfile {
  name: string;
  profileImagePath: string | null;
}

export interface User {
  userId: string;
  email: string;
  hasAcceptedTerms: boolean;
  role: Role;
  profile: UserProfile;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}
