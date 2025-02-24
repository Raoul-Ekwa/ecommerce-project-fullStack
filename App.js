
import StackNavigator from './navigation/StackNavigator';
import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';

const categories = ['Fashion', 'Auto', 'Parfum', 'Model', 'Price', 'Auto', 'Parfum', 'Model', 'Price'];

export default function App() {
  return (
    <>
      <StatusBar
        style="dark"  
        backgroundColor="lightgreen"  // Couleur de fond de la StatusBar
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.listWrapped}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text style={styles.itemTitle}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* <><StackNavigator /></> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faf2f9',
  },
  scrollContentContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  listWrapped: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    gap: 10,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { top: 10, bottom: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  }
});
