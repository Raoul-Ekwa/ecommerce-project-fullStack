import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { SIZES, COLORS, SHADOWS } from "../../constants";
import { useNavigation } from '@react-navigation/native';


const ProductCartView = () => {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}>
      <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
                source={{
                uri: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&h=350",
                }}
                style={styles.image}
            />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>
                    Product Name{" "}
                </Text>
                <Text style={styles.price}>$99.99</Text>
                <Text style={styles.description} numberOfLines={1}>
                    Product description
                </Text>
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCartView;

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    borderRadius: SIZES.medium,
    marginEnd: SIZES.Large,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.Large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 5,
  },
  price: {
    fontSize: SIZES.Large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 5,
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
