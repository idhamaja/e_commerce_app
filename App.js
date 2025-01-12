import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ProductList from "./src/screens/ProductListScreen";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import BottomTabs from "./src/screens/BottomTabs";
import ProductDetail from "./src/screens/ProductDetail";
import { LoginContext } from "./src/context/UserLoginContext";
import { FavContext } from "./src/context/RefectchFavContext";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const {userLogin, setUserLogin} = useState(true);
  const {refetchFav, setRefetchFav} = useState("");

  let [fontsloaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsloaded) {
      console.log("events triggered", fontsloaded);
      await SplashScreen.hideAsync();
    }
  }, [fontsloaded]);

  if (!fontsloaded) {
    console.log("Fonts not loaded");
    return null;
  } else {
    console.log("Fonts are loaded");
  }

  return (
    <LoginContext.Provider value={{ userLogin, setUserLogin }}>
      <FavContext.Provider value={{ refetchFav, setRefetchFav }}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator
            screenOptions={{
              tabBarStyle: {
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 70,
              },
            }}
          >
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ProductList" component={ProductList} />

            <Stack.Screen name="prodcut_detail" component={ProductDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContext.Provider>
    </LoginContext.Provider>
  );
}
