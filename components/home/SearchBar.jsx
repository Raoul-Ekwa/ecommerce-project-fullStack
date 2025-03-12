import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { SHADOWS } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const SearchBar = () => {

  const navigation =  useNavigation();

  return (
    <View style={styles.SearchBarContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search" size={24} color={COLORS.gray} />
        </TouchableOpacity>
        <TextInput
          placeholder="What are you looking for"
          value=""
          onPressIn={() => {}}
          style={styles.input}
        />

      </View>

      <TouchableOpacity style={styles.cameraIconContainer} >
          <Ionicons name="camera-outline" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginVertical: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small,
    width: "80%", 
    marginHorizontal: 15
  },
  input: {
    width: "100%", // Le TextInput occupe toute la largeur du conteneur
    height: 40, // Hauteur fixe, mais tu peux la rendre dynamique si nécessaire
    fontSize: SIZES.small, // Taille de la police dynamique en fonction de la largeur de l'écran
    paddingLeft: 10, // Ajoute un peu d'espace à gauche
    //textAlign: "center", //
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.xLarge + 2,
  },
  cameraIconContainer: {
   backgroundColor: "darkgreen",
    padding: 12,
    borderRadius: SIZES.xSmall,
    marginRight: 18,
    ...SHADOWS.small 
  }
});
