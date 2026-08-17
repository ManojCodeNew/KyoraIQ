import ImagePicker from 'react-native-image-crop-picker';
export const handleImagePicker = async () => {
  try {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      multiple: true,
      minFiles: 12,
      maxFiles: 100,
      mediaType: 'photo',
      cropperCircleOverlay: true,
    });
    console.log(image);
  } catch (error) {
    console.log(error);
  }
};
