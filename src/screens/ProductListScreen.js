import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { theme } from "../constants/theme";
import ProductCardComponent from "../components/ProductCardComponent";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Use effect LOADING is being called");
    const timer = setTimeout(() => {
      console.log("changing the state variable value");
      setLoading(false);
      console.log("The value of loading is point 2", loading);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <LottieView
          source={require("../../assets/jsons/animation.json")}
          autoPlay
          style={{ width: 150, height: 150 }}
          loop
        />
      </View>
    );
  }

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
