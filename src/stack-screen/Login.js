import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from '../AuthProvider'
import Center from '../common/Center'
import styles from '../common/CommonStyles'

export default function Login({ navigation, route }) {
  const { login } = React.useContext(AuthContext)

  return (
    <Center>
      <View style={styles.signIn}>
        <Text style={styles.text}>Route name: {route.name}</Text>
        <TouchableOpacity
          onPress={() => {
            login()
          }}>
          <View style={styles.button}>
            <Text>Log in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register')
          }}>
          <View style={styles.button}>
            <Text>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Center>
  )
}
