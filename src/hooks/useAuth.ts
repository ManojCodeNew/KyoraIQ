import { useState } from 'react';
import { Alert } from 'react-native';
import { useAuthContext } from '../context/AuthContextProvider';
import { USER_DATA } from '../config/data';
import { User } from '../types/auth.types';
import ImagePicker from 'react-native-image-crop-picker';

export interface FormData {
  email: string;
  password: string;
  hasAcceptedTerms: boolean;
}

interface UseAuthReturn {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  profileName: string;
  setProfileName: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<boolean>;
  handleRegister: () => Promise<boolean>;
  handleProfileName: () => Promise<boolean>;
  handleProfileImagePicker: () => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    hasAcceptedTerms: false,
  });

  const [profileName, setProfileName] = useState<string>('');

  const { setAuthState } = useAuthContext();

  const handleLogin = async (): Promise<boolean> => {
    // Validation
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      Alert.alert('Error', 'Please Enter a email');
      return false;
    }

    const isEmailExist = USER_DATA.find(user => user.email === trimmedEmail);

    if (!isEmailExist) {
      Alert.alert('Error', 'User is not exist, please create a account');
      return false;
    }

    const defaultUserData: User = {
      userId: '01',
      email: trimmedEmail,
      hasAcceptedTerms: true,
      role: 'client',
      profile: {
        name: '',
        profileImagePath: null,
      },
    };

    // decision
    setAuthState(prev => ({
      ...prev,
      isAuthenticated: true,
      userType: trimmedEmail === 'manoj@gmail.com' ? 'pro' : 'free',
      user: defaultUserData,
    }));

    Alert.alert('Success', 'Registered Successful');
    return true;
  };

  const handleRegister = async (): Promise<boolean> => {
    // Validation
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      Alert.alert('Error', 'Please Enter a email');
      return false;
    }

    if (!formData.hasAcceptedTerms) {
      Alert.alert('Error', 'Please accept the terms and conditions');
      return false;
    }

    const defaultUserData: User = {
      userId: '01',
      email: trimmedEmail,
      hasAcceptedTerms: formData.hasAcceptedTerms,
      role: 'client',
      profile: {
        name: '',
        profileImagePath: null,
      },
    };

    // decision
    setAuthState(prev => ({
      ...prev,
      isAuthenticated: true,
      userType: 'free',
      user: defaultUserData,
    }));

    Alert.alert('Success', 'Registered Successful');
    return true;
  };

  const handleProfileName = async (): Promise<boolean> => {
    const trimmedName = profileName.trim();
    if (!trimmedName) {
      Alert.alert('Error', 'Please Enter a name');
      return false;
    }

    setAuthState(prev => ({
      ...prev,
      user: {
        ...prev.user,
        profile: { ...prev.user.profile, name: profileName },
      },
    }));
    return true;
  };

  const handleProfileImagePicker = async () => {
    try {
      const selectedImage = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo',
        cropperCircleOverlay: true,
      });
      console.log(selectedImage.path);
      setAuthState(prev => ({
        ...prev,
        user: {
          ...prev.user,
          profile: {
            ...prev.user.profile,
            profileImagePath: selectedImage.path,
          },
        },
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formData,
    setFormData,
    handleLogin,
    handleRegister,
    handleProfileName,
    profileName,
    setProfileName,
    handleProfileImagePicker,
  };
};
