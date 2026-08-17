import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../ui/text/AppText';
import AppCheckBox from '../ui/checkBox/AppCheckBox';
import { COLORS } from '../../config/colors';
import { fontPixel, heightPixel, widthPixel } from '../../config/responsive';
import { RoleType } from '../../screens/profileSetup/ChooseRoleScreen';
import { useAuthContext } from '../../context/AuthContextProvider';

interface RoleCardProp {
  data: RoleType;
  index: number;
}

const RoleCard = ({ data, index }: RoleCardProp) => {
  const { authState, setAuthState } = useAuthContext();
  return (
    <View style={styles.roleCardContainer} key={index}>
      <View style={styles.contentContainer}>
        <AppText
          textContent={data.role.slice(0, 1).toUpperCase() + data.role.slice(1)}
          variant="btnText"
          textStyle={styles.roleTitle}
        />
        <AppText textContent={data.description} variant="body" />
      </View>
      <View style={styles.actionsContainer}>
        <AppCheckBox
          checked={authState.user.role === data.role}
          onPress={() =>
            setAuthState(prev => ({
              ...prev,
              user: { ...prev.user, role: data.role },
            }))
          }
          variant="circle"
        />
      </View>
    </View>
  );
};

export default RoleCard;

const styles = StyleSheet.create({
  roleCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.app_F5F6FB,
    paddingHorizontal: widthPixel(30),
    paddingVertical: heightPixel(16),
    borderRadius: widthPixel(12),
  },
  contentContainer: {
    gap: widthPixel(8),
  },
  roleTitle: {
    fontSize: fontPixel(18),
    color: COLORS.app_212121,
    alignSelf: 'flex-start',
  },
  actionsContainer: {
    alignSelf: 'flex-start',
  },
});
