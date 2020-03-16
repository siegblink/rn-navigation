import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AuthContext } from './AuthProvider'
import HomeStack from './HomeStack'
import Center from './common/Center'
import styles from './common/CommonStyles'

const Tabs = createBottomTabNavigator()

// function Home() {
//   const { logout } = React.useContext(AuthContext)
//   return (
//     <Center>
//       <View style={styles.home}>
//         <Text style={styles.text}>Home</Text>
//         <TouchableOpacity onPress={() => logout()}>
//           <View style={styles.button}>
//             <Text>Log out</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </Center>
//   )
// }

function Search() {
  const { logout } = React.useContext(AuthContext)
  return (
    <Center>
      <View style={styles.home}>
        <Text style={styles.text}>Search</Text>
        <TouchableOpacity onPress={() => logout()}>
          <View style={styles.button}>
            <Text>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Center>
  )
}

export default function AppTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          // Checking the route name
          if (route.name === 'Home') {
            iconName = 'ios-home'
          } else if (route.name === 'Search') {
            iconName = 'ios-search'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name='Home' component={HomeStack} />
      <Tabs.Screen name='Search' component={Search} />
    </Tabs.Navigator>
  )
}
