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
    marginLeft: 10,
  
    
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
    width: "80%", 
    marginHorizontal: 4

  },
  input: {
    width: "100%", 
    height: 40, 
    fontSize: SIZES.small, 
    paddingLeft: 10, 
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
    marginRight: 18,
    ...SHADOWS.small 
  },
});


