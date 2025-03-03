import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { SHADOWS } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.SearchBarContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What are you looking for"
            value=""
            onPressIn={() => {}}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.searchIconContainer}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginRight: 10,
    
    
  },
  SearchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginVertical: 15,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small,
    width: "70%", // Adapte la largeur en fonction de l'écran
    marginHorizontal: SIZES.large,
  },
  input: {
    width: "100%", // Le TextInput occupe toute la largeur du conteneur
    height: 40, // Hauteur fixe, mais tu peux la rendre dynamique si nécessaire
    fontSize: SIZES.small, // Taille de la police dynamique en fonction de la largeur de l'écran
    paddingLeft: 10, // Ajoute un peu d'espace à gauche
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.small,
  },
  searchIconContainer: {
    backgroundColor: "darkgreen",
    padding: 12,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small //appliquons tous les elements constitutifs de la constante SHADOWS
  },
});


