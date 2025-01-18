import { Feather, Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { theme } from "../constants/theme";
import styles from "../styles/welcome.style";

function WelcomeComponent() {
  let x = 0;
  return (
    <View>
      <View>
        <Text style={styles.welcomeText(theme.colors.black, 70)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(theme.colors.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainerStyle}>
        <TouchableOpacity
          onPress={() => {
            console.log("KEPENCET SEARCH!!");
          }}
        >
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.searchBtn}>
          <Ionicons
            name="camera-outline"
            size={36}
            color={theme.colors.offWhite}
          />
        </View>
      </View>
    </View>
  );
}

export default WelcomeComponent;
