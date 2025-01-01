import { Feather, Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { theme } from "../constants/theme";

function WelcomeView() {
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

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.small,
    marginRight: theme.sizes.small,
  },

  searchBtn: {
    width: 50,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.sizes.medium,
  },

  welcomeText: (color, top) => ({
    fontSize: theme.sizes.xxLarge-6,
    color: color,
    marginTop: top,
    marginHorizontal: theme.sizes.small,
  }),

  searchIcon: {
    marginTop: theme.sizes.small,
    color: theme.colors.gray,
    marginHorizontal:theme.sizes.xSmall,
  },

  searchContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    marginHorizontal: theme.sizes.small,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.medium,
    marginVertical: theme.sizes.medium,
  },

  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: theme.sizes.small
  },
});

export default WelcomeView;
