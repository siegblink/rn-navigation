import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../AuthProvider'
import Center from '../common/Center'
import styles from '../common/CommonStyles'

export default function Register({ navigation, route }) {
  const { login } = React.useContext(AuthContext)

  return (
    <Center>
      <View style={styles.signIn}>
        <Text style={styles.text}>Route name: {route.name}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}>
          <View style={styles.button}>
            <Text>Go back to Sign in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            login()
          }}>
          <View style={styles.button}>
            <Text>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Center>
  )
}
