import React from "react";
import { View, Text, FlatList } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingErrorComponent({ isLoading, error }) {
  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <LottieView
          source={require("../../assets/jsons/animation.json")}
          autoPlay
          loop
          style={{ width: 130, height: 130 }}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text>We have an error</Text>
      </View>
    );
  }

  return null;
}
