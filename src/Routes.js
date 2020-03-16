import React from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'
import Center from './common/Center'
import AppTabs from './AppTabs'
import AuthStack from './AuthStack'

export default function Routes() {
  const { user, login } = React.useContext(AuthContext)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // Check if the user is logged in
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login()
        }
        setLoading(false)
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
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
