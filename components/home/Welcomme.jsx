import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import SearchBar from './SearchBar'

const Welcomme = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find the most
      </Text>
      <Text style={styles.welcomeTxt(COLORS.primary, -20)}>
         Luxurious Furniture
      </Text>

      <SearchBar/>
    </View>
  )
}

export default Welcomme

const styles = StyleSheet.create({
    container: {
        width: '100%', // Tout ce ki sera a l'interieur de ce container occupera toute la largeur 
    },
// Ici nous rendons le style welcomeTxt reutilisable 
// On peut seulement modifier a notre convenance le color et le top
    welcomeTxt:(color, top) => ({ 
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge - 5,
        marginTop: top,
        color: color,
        marginHorizontal: 10
    })
})