import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen';
import ForgotPassScreen from './src/screens/ForgotPassScreen';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Forgot Password' component={ForgotPassScreen} />
        <Stack.Screen name='Sign Up' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
