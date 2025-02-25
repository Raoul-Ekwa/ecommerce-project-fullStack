
import StackNavigator from './navigation/StackNavigator';
import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faf2f9',
  },
});
