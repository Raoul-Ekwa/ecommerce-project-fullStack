import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <Ionicons name="chevron-back" size={30} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} style={[styles.iconContainer, {alignItems:'center'}]}/>
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&h=350",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
          <View style={styles.titleRow}>
              <Text style={styles.title}>Products</Text>
              <View style={styles.priceWrapper}>
                  <Text style={styles.price}>$ 990.99</Text>
              </View>

              

          </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    position: "absolute",
    top: SIZES.xLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  iconContainer: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 20,
    padding: SIZES.small - 4,
  },
  details: {
    marginTop: SIZES.Large,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    width: SIZES.medium,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: SIZES.small,
    marginHorizontal: 20,
    width: SIZES.width - 44,
    top: 20
  },
  title: {
    fontSize: SIZES.Large,
    fontFamily: "bold",
   
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.Large,
    
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semibold",
    fontSize: SIZES.Large,
    
  },
  description: {
    fontSize: SIZES.Large,
    color: COLORS.gray,
  },
  addButton: {
    position: "absolute",
    bottom: SIZES.medium + 20,
    right: SIZES.small,
  },
});
