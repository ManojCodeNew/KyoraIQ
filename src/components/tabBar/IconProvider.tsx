import React from 'react';
import AppImage from '../ui/image/AppImage';
import { COLORS } from '../../config/colors';
import { IMAGES } from '../../config/image';

export type IconLabel = 'home' | 'chat' | 'history' | 'profile';

const IconProvider = ({
  focused,
  icon_label,
}: {
  focused: boolean;
  icon_label: IconLabel;
}) => {
  return (
    <>
      {icon_label === 'home' && (
        <AppImage
          imagePath={IMAGES.tabBar.img_home}
          variant="default"
          imageStyle={{
            tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          }}
        />
      )}
      {icon_label === 'chat' && (
        <AppImage
          imagePath={IMAGES.tabBar.img_chat}
          variant="default"
          imageStyle={{
            tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          }}
        />
      )}
      {icon_label === 'history' && (
        <AppImage
          imagePath={IMAGES.tabBar.img_history}
          variant="default"
          imageStyle={{
            tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          }}
        />
      )}
      {icon_label === 'profile' && (
        <AppImage
          imagePath={IMAGES.tabBar.img_profile}
          variant="default"
          imageStyle={{
            tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          }}
        />
      )}
    </>
  );
};

export default IconProvider;
