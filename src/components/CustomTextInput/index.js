import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function CustomTextInput(props) {
  const {
    value,
    placeholder,
    onChangeText,
    onFocus,
    onBlur,
    onPress,
    onSubmitEditing,
    secureTextEntry,
    disabled,
    editable = true,
    multiline,
    inputMode,
    cursorColor,
    placeholderTextColor = 'gray',
    backgroundColor = 'white',
    textInputStyle,
    textinputContainer,
    icon,
    imageSource,
  } = props;
  return (
    <View style={[styles.container, { backgroundColor }, textinputContainer]}>
      <TextInput
        style={[styles.textInput, { color: 'black' }, textInputStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        multiline={multiline}
        inputMode={inputMode}
        cursorColor={cursorColor}
        autoCapitalize="none"
        editable={editable && !disabled}
        onSubmitEditing={onSubmitEditing}
      />
      {icon ? (
        <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
          {/* <Icon name={icon} size={20} color={iconColor} /> */}
        </TouchableOpacity>
      ) : imageSource ? (
        <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
          <Image source={imageSource} style={styles.imageIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 56,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
  },
  iconWrapper: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
