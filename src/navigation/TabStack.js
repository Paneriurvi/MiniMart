import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import image from '../assets/images';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenName from './ScreenName';
import HomeScreen from '../screens/HomeScreen';
import { CustomText } from '../components';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name={ScreenName.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <CustomText
              style={styles.labelText}
              fontSize={12}
              color={focused ? '#000' : 'gray'}
            >
              {ScreenName.Home}
            </CustomText>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                {
                  backgroundColor: 'white',
                },
              ]}
            >
              <Image
                source={image.home}
                // resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused ? '#000' : 'gray',
                  },
                ]}
              />
            </View>
          ),
        }}
      />
       <Tab.Screen
        name={ScreenName.Cart}
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <CustomText
              style={styles.labelText}
              fontSize={12}
              color={focused ? '#000' : 'gray'}
            >
              {ScreenName.Cart}
            </CustomText>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                {
                  backgroundColor: 'white',
                },
              ]}
            >
              <Image
                source={image.cart}
                // resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused ? '#000' : 'gray',
                  },
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 60,
  },
  iconStyle: {
    height: 18,
    width: 18,
  },
  labelText: {
    marginTop: 2,
    fontWeight: '600',
  },
});
