import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from "../components/HomeCarouselComponent";
import HomeHeadingComponent from "../components/HomeHeadingComponent";
import ProductCardComponent from "../components/ProductCardComponent";
import LottieView from "lottie-react-native";
import fetchHomeProduct from "../hooks/fetchHomeProduct";

const HomeScreen = () => {
  const { isLoading, data, error } = fetchHomeProduct();

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <LottieView
          source={require("../../assets/jsons/animation.json")}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>We have an error</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data || []} // Pastikan data valid
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        renderItem={({ item }) => <ProductCardComponent item={item} />}
        numColumns={2}
        ListHeaderComponent={() => (
          <View>
            <WelcomeComponent />
            <HomeCarouselComponent />
            <HomeHeadingComponent />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  lottieStyle: {
    width: 130,
    height: 130,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default HomeScreen;
