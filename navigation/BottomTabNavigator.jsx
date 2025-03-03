import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Home, Profile, Cart, Search} from "../screens/index"; //index.jsest le point d'entrée de notre dossier screens
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOrKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            ),
          }}
        />
        <Tab.Screen 
           name="Cart" 
           component={Cart} 
           options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            ),
          }}
        />
        <Tab.Screen 
           name="Search" 
           component={Search} 
           options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            ),
          }}
        />
      </Tab.Navigator>

  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
