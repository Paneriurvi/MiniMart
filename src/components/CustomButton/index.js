import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton(props) {
  const {
    btnTitle,
    btnContainer,
    borderRadius = 4,
    btnBgColor = 'black',
    btnTextStyle,
    btnTextColor = 'white',
    onPress,
    rightIcon,
    rightIconStyle,
    rightTintColor,
    leftIcon,
    leftIconStyle,
    leftTintColor,
    isIconButton = false,
    icon,
    iconStyle,
    onIconPress,
    iconBtnStyle,
    disabled
  } = props;
  return isIconButton ? (
    <TouchableOpacity
      style={[styles.iconBtn, iconBtnStyle]}
      onPress={onIconPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.iconImageStyle, iconStyle]}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[
        styles.container,
        btnContainer,
        { borderRadius: borderRadius, backgroundColor: btnBgColor },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.btnDetailContainer}>
        {leftIcon && (
          <Image
            source={leftIcon}
            resizeMode="contain"
            style={[styles.leftIconStyle, leftIconStyle]}
            tintColor={leftTintColor}
          />
        )}
        <Text style={[styles.text, btnTextStyle, { color: btnTextColor }]}>
          {btnTitle}
        </Text>
        {rightIcon && (
          <Image
            source={rightIcon}
            resizeMode="contain"
            style={[styles.rightIconStyle, rightIconStyle]}
            tintColor={rightTintColor}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnDetailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  rightIconStyle: {
    height: 15,
    width: 15,
    marginLeft: 8,
  },
  leftIconStyle: {
    height: 15,
    width: 15,
    marginRight: 8,
  },
  iconImageStyle: {
    height: 20,
    width: 20,
  },
  iconBtn: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
