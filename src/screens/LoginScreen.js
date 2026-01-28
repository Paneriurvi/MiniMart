import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  CustomButton,
  CustomText,
  CustomTextInput,
  SafeAreaContainer,
} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenName from '../navigation/ScreenName';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidData = () => {
    if (!name.trim()) {
      setNameError('Please enter your username');
      return false;
    } else {
      setNameError('');
    }
    if (!Password.trim()) {
      setPasswordError('Please enter your password');
      return false;
    } else {
      setPasswordError('');
    }
    if (Password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    } else {
      setPasswordError('');
    }
    return true;
  };

  const handleLogin = async () => {
    if (isValidData()) {
      try {
        await AsyncStorage.setItem('isLogin', 'true');

        Alert.alert('Login Successful');
        navigation.reset({
          index: 0,
          routes: [{ name: ScreenName.TabStack }],
        });
      } catch (error) {
        console.log('Login error:', error);
      }
    }
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <CustomText textAlign={'center'} style={styles.hederText}>
          {'LoginScreen'}
        </CustomText>
        <CustomTextInput
          placeholder="Username"
          textinputContainer={{ marginTop: 20 }}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
        {nameError && (
          <CustomText color={'red'} style={styles.errorText}>
            {nameError}
          </CustomText>
        )}
        <CustomTextInput
          placeholder="Password"
          textinputContainer={{ marginTop: 20 }}
          secureTextEntry={true}
          value={Password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        {passwordError && (
          <CustomText color={'red'} style={styles.errorText}>
            {passwordError}
          </CustomText>
        )}
        <CustomButton
          btnTitle={'Login'}
          btnContainer={{ marginTop: 40 }}
          onPress={() => handleLogin()}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  hederText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
  },
});
