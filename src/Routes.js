import React from 'react'
import { Button, Text, ActivityIndicator, AsyncStorage } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'
import Center from './Center'

const Stack = createStackNavigator()

function Login({ navigation, route }) {
  const { login } = React.useContext(AuthContext)

  return (
    <Center>
      <Text>Route name: {route.name}</Text>
      <Button
        title='Log in'
        onPress={() => {
          navigation.navigate('Register')
          login()
        }}
      />
      <Button
        title='Go to register'
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
    </Center>
  )
}

function Register({ navigation, route }) {
  return (
    <Center>
      <Text>Route name: {route.name}</Text>
      <Button
        title='Go to login'
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
    </Center>
  )
}

export default function Routes() {
  const { user, login } = React.useContext(AuthContext)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // Check if the user is logged in
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          // Decode it
          login()
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {user ? (
        <Center>
          <Text>User exist</Text>
        </Center>
      ) : (
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
      )}
    </NavigationContainer>
  )
}
