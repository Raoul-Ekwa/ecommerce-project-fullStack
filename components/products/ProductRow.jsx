import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCartView from './ProductCartView'

const ProductRow = () => {
      const products = [1, 2, 3, 4, 5]
  return (
    <View style={styles.flatlistContainer}>
      <FlatList 
        data={products}
        renderItem={({ item }) => <ProductCartView />}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SIZES.medium }} // Espacement à gauche et à droite
        ItemSeparatorComponent={() => <View style={{ width: SIZES.medium }} />} // Espacement entre les items
      />
    </View>
  ) 
}

export default ProductRow

const styles = StyleSheet.create({
  flatlistContainer : { 
    marginTop: SIZES.medium,
    marginLeft: 10
 }
})