import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetailScreen from './screens/ProductDetailScreen';
import { Cart, Profile, Search, ProductDetail } from './screens';



const Stack = createNativeStackNavigator()

const App = () => {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),

  })

  const onLayoutRootView = useCallback(async () => {

    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer >

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Bottom Navigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />

         <Stack.Screen 
            name="ProductDetail" 
            component={ProductDetailScreen} 
          />

           <Stack.Screen 
            name="Cart" 
            component={Cart} 
          />

           <Stack.Screen 
            name="Profile" 
            component={Profile} 
          />

          <Stack.Screen 
            name="Search" 
            component={Search} 
          />

      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'regular',
    fontSize: 20,
  }
})
