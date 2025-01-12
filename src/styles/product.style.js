import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.lightWhite },

  image: {
    marginVertical: 10,
    width: "95%",
    height: 280,
    alignSelf: "center",
    borderRadius: theme.sizes.small,
  },

  details: {
    backgroundColor: theme.colors.lightWhite,
    width: theme.sizes.width,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    marginRight: 20,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-start",
    top: theme.sizes.xSmall,
    marginHorizontal: theme.sizes.large,
  },
  title: {
    fontSize: theme.sizes.large,
    fontFamily: "Roboto_700Bold",
  },
  price: {
    fontSize: theme.sizes.large,
    fontFamily: "Roboto_500Medium",
  },
  textSpace: {
    marginHorizontal: theme.sizes.xSmall,

    color: theme.colors.gray,
    fontFamily: "Roboto_500Medium",
  },
  priceWrapper: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.large,
    paddingHorizontal: 10,
  },
  descriptionWrapper: {},
  descriptionTitle: {},
  descriptionText: {},
});

export default styles;
