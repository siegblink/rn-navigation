import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './stack-screen/Login'
import Register from './stack-screen/Register'

const Stack = createStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      // screenOptions={{ header: () => null }}
      initialRouteName='Login'>
      <Stack.Screen
        options={{ headerTitle: 'Sign in' }}
        name='Login'
        component={Login}
      />
      <Stack.Screen
        options={{ headerTitle: 'Sign up' }}
        name='Register'
        component={Register}
      />
    </Stack.Navigator>
  )
}
