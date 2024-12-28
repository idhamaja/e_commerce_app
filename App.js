import { StyleSheet, Text, View } from "react-native";
import WelcomeView from "./src/components/WelcomeView";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={{ fontSize: 20 }}>Hello</Text>
        <Text style={{ fontSize: 22 }}>Let's Program in</Text>
        <Text style={{ fontSize: 25 }}>React Native</Text>
      </View>
      <WelcomeView />
      <View style={styles.bottomBox}>
        <Text style={{ fontSize: 20 }}>Hello</Text>
        <Text style={{ fontSize: 22 }}>Let's Program in</Text>
        <Text style={{ fontSize: 25 }}>React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bbb",
  },

  topBox: {
    flexDirection: "column",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bbb",
  },

  bottomBox: {
    flexDirection: "column",
    flex: 0.3,
    justifyContent: "center",
    backgroundColor: "#ddd",
    alignItems: "center",
  },
});
