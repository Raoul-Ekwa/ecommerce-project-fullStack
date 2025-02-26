
import StackNavigator from './navigation/StackNavigator';
import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, View, SafeAreaView } from 'react-native';


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <View >
          <Text>E-Commerce App </Text>
        </View>
      </SafeAreaView>


    // <>
    //   <StackNavigator />
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf2f9',
  },
});
