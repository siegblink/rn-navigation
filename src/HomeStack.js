import React from 'react'
import faker from 'faker'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Center from './common/Center'
import styles from './common/CommonStyles'
import { AuthContext } from './AuthProvider'

const Stack = createStackNavigator()

function Feed({ navigation }) {
  return (
    <Center>
      <View style={styles.home}>
        <TouchableOpacity>
          <View style={styles.feedContainer}>
            <FlatList
              keyExtractor={(product, index) => product + index}
              data={Array.from(Array(50), () => faker.commerce.product())}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.productItem}
                    onPress={() => {
                      navigation.navigate('Product', { name: item })
                    }}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </Center>
  )
}

function Product({ route }) {
  return (
    <Center>
      <View style={styles.home}>
        <TouchableOpacity>
          <View style={styles.productContainer}>
            <Text>{route.params.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Center>
  )
}

export default function HomeStack() {
  const { logout } = React.useContext(AuthContext)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Feed'
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.headerRight}
                onPress={() => {
                  logout()
                }}>
                <Text>Log out</Text>
              </TouchableOpacity>
            )
          },
        }}
      />
      <Stack.Screen name='Product' component={Product} />
    </Stack.Navigator>
  )
}
