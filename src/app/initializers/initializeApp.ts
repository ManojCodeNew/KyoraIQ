type AppInitializationResult = {
  isAuthenticated: boolean;
};

export const initializeApp = async (): Promise<AppInitializationResult> => {
  console.log('App is initializing...');
  return { isAuthenticated: true };
};
