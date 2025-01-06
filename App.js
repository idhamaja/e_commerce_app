import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ProductList from "./src/screens/ProductListScreen";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import React, {  useCallback, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsloaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async() => {
    console.log("events triggered");
  }, [fontsloaded]);

  if (!fontsloaded) {
    console.log("Fonts not loaded");
    return null;
  } else {
    console.log("Fonts loaded");
  }

  return (
    <NavigationContainer onReady={onLayoutRootView} >
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 0,
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
