import React from 'react'
import { View } from 'react-native'

export default function Center(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {props.children}
    </View>
  )
}
