import { FlatList, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import ProductCardComponent from "../components/ProductCardComponent";

const LocalProductList = [
  {
    id: "1A",
    title: "colorful furniture",
    price: "$100",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    title: "compfy sofa",
    price: "$200",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    title: "Beautiful home fur",
    price: "$500",
    path: require("../../assets/images/fn1.jpg"),
  },
];

export default function ProductList() {
  const renderItem = ({ item }) => {
    return <ProductCardComponent item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={LocalProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    //alignItems: "center",
    height: 240,
    overflow: "hidden",
    margin: 10,
    backgroundColor: theme.colors.secondary,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: theme.sizes.small,
  },

  details: {
    padding: theme.sizes.small,
  },
  price: {
    marginBottom: 10,
  },
  title: {
    fontSize: theme.sizes.medium,
  },
});
