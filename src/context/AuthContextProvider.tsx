import { createContext, useContext, useState } from 'react';
import { AuthStatus } from '../types/auth.types';

interface AuthContextType {
  authStatus: AuthStatus;
  setAuthStatus: React.Dispatch<React.SetStateAction<AuthStatus>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>({
    isAuthenticated: false,
    user: null,
  });
  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
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
