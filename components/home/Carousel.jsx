import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",

    ]
  return (
    <View style={styles.carouselContainer}>
       <SliderBox images={slides} 
       dotColor={COLORS.primary} 
       inactiveDotColor={COLORS.secondary} 
       ImageComponentStyle={{borderRadius: 15, width: "93%", marginTop: 15}}
       autoplay circleLoop />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
       flex: 1,
       alignItems: "center",
     
    }
})