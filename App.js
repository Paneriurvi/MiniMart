import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabStack from './src/navigation/TabStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const loginStatus = await AsyncStorage.getItem('isLogin');
    console.log('Login Status:', loginStatus);
    if (loginStatus) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLogin ? (
            <Stack.Screen
              name="TabStack"
              component={TabStack}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
