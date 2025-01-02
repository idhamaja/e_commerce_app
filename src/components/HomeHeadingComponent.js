import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles/headings.style";

const HomeHeadingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NEW RIVALS</Text>
        <TouchableOpacity onPress={() => console.log("KEPENCET!!!")}>
          <Entypo name="grid" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeadingComponent;
