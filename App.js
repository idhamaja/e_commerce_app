import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import WelcomeComponent from "./src/components/WelcomeComponent";
import HomeCarousel from "./src/components/HomeCarouselComponent";

export default function App() {
  return (
    <SafeAreaView>
      <WelcomeComponent/>
      <HomeCarousel/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Mengatur komponen ke atas
    backgroundColor: "#bbb",
    paddingTop: 50,
  },

  box: {
    flexDirection: "column",

    justifyContent: "center",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 15,
    padding: 15,
  },
});
