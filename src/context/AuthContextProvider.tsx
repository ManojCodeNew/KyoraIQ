import { createContext, useContext, useState } from 'react';
import { AuthState } from '../types/auth.types';

interface AuthContextType {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    userType: 'free',
    user: {
      userId: '00',
      email: '',
      hasAcceptedTerms: false,
      role: 'client',
      profile: {
        name: '',
        profileImagePath: '',
      },
    },
  });

  console.log('User Info :', authState);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext<AuthContextType | undefined>(AuthContext);
  if (context === undefined) {
    throw Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
