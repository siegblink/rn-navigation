import React from 'react'
import { AsyncStorage } from 'react-native'

export const AuthContext = React.createContext({})

export default function AuthProvider(props) {
  const [user, setUser] = React.useState(null)
  
  return (
    <AuthContext.Provider
      value={{
        user,
        login() {
          const fakeUser = { username: 'Bob' }
          setUser(fakeUser)
          AsyncStorage.setItem('user', JSON.stringify(fakeUser))
        },
        logout() {
          setUser(null)
          AsyncStorage.removeItem('user')
        },
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}
