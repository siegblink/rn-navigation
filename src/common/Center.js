import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Center(props) {
  return (
    <View
      style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
})
