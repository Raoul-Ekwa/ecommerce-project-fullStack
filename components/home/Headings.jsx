import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons';

const Headings = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerTitle}>New Rivals</Text>
         <TouchableOpacity>
           <Ionicons name="ios-grid" size={24} color={COLORS.primary}/>
         </TouchableOpacity>
       </View>
    </View>
  )
}

export default Headings

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.primary,
    },
})