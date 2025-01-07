import { View, Text, FlatList } from "react-native";
import React from "react";
import fetchHomeProduct from "../hooks/fetchHomeProduct";
import LottieView from "lottie-react-native";
import ProductCardComponent from "../components/ProductCardComponent";

export default function HomeProductListScreen() {
  const { isLoading, data, error } = fetchHomeProduct();
  return (
    <View>
      {isLoading ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LottieView
            source={require("../../assets/jsons/animation.json")}
            autoPlay
            style={{ width: 130, height: 130 }}
            loop
          />
        </View>
      ) : error ? (
        <Text>WE HAVE ERROR</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardComponent item={item} />}
          numColumns={2}
        />
      )}
    </View>
  );
}
