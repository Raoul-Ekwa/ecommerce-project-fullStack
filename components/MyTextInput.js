import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const MyTextInput = ({...props}) => {
  return (
    <View >

      <TextInput  {...props}/> 
   
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
    
})