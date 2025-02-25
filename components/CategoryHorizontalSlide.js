import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';

// Liste des catégories à afficher
const categories = ['Fashion', 'Auto', 'Parfum', 'Model', 'Price', 'Auto', 'Parfum', 'Model', 'Price'];

export default function CategoryHorizontalSlide() {
  return (
    <>
      
      <StatusBar
        style="dark"  
        backgroundColor="lightgreen"  
      />
      
   
      <ScrollView
        style={styles.container}  
        contentContainerStyle={styles.scrollContentContainer}  
        horizontal  
        showsHorizontalScrollIndicator={false}  
      >
        {/* Conteneur qui enveloppe chaque élément de la liste */}
        <View style={styles.listWrapped}>
          {/* Le map est utilisé pour itérer sur chaque élément du tableau categories */}
          {categories.map((category, index) => (
      
            <TouchableOpacity key={index} style={styles.listItem}>
              {/* Affiche le titre de chaque catégorie */}
              <Text style={styles.itemTitle}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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