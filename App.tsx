import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Registro from './src/pages/Registro';


export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();  

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login - PowerRank', headerShown: false }} 
        />
        <Stack.Screen 
          name="Registro" 
          component={Registro} 
          options={{ title: 'Registro', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}