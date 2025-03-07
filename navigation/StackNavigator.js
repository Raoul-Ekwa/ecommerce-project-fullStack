import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
       <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
         </Stack.Navigator>
       </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})