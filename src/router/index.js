import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SignIn,
  SignUp,
  SignUpAddress,
  Splashscreen,
  SuccessSignUp,
  Home,
  Order,
  Profile,
  ProductDetail,
  OrderSummary,
  PaymentConfirmation,
  PaymentSuccess,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentConfirmation"
        component={PaymentConfirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
