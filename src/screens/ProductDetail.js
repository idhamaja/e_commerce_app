import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function ProductDetail({ navigation }) {
  const route = useRoute();
  const item = route.params.item;
  return (
    <View>
      <Text>ProductDetail</Text>
      
    </View>
  );
}
