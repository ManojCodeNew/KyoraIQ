import React from 'react';
import AppImage from '../ui/image/AppImage';
import { ICONS } from '../../config/icon';

export type IconLabel = 'homeStack' | 'chat' | 'history' | 'profile';

const IconProvider = ({
  // focused,
  icon_label,
}: {
  focused: boolean;
  icon_label: IconLabel;
}) => {
  return (
    <>
      {icon_label === 'homeStack' && (
        <AppImage
          imagePath={ICONS.tabBar.ic_home}
          showLoader={false}
          variant="default"
          // tintColor={focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC}
          // imageStyle={{
          //   tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          // }}
        />
      )}
      {icon_label === 'chat' && (
        <AppImage
          imagePath={ICONS.tabBar.ic_chat}
          variant="default"
          showLoader={false}
          // imageStyle={{
          //   tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          // }}
        />
      )}
      {icon_label === 'history' && (
        <AppImage
          imagePath={ICONS.tabBar.ic_history}
          showLoader={false}
          variant="default"
          // imageStyle={{
          //   tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          // }}
        />
      )}
      {icon_label === 'profile' && (
        <AppImage
          imagePath={ICONS.tabBar.ic_profile}
          showLoader={false}
          variant="default"
          // imageStyle={{
          //   tintColor: focused ? COLORS.app_FFFFFF : COLORS.app_CCCCCC,
          // }}
        />
      )}
    </>
  );
};

export default IconProvider;
