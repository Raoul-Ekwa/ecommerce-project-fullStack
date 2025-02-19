import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'



interface Props {
    title: string;
} 
const MyButton : FC<Props>  = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container}  onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FEBE10',
      borderRadius: 6,
      width: 200,
      padding: 15,
      marginTop: 80,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "auto",
      marginRight: "auto", 

    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
  
})