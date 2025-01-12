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
  descriptionWrapper: {
    marginTop: theme.sizes.large * 2,
    marginHorizontal: theme.sizes.large,
  },
  descriptionTitle: {
    fontFamily: "Roboto_700Bold",
    fontSize: theme.sizes.large - 2,
  },
  descriptionText: {
    fontFamily: "Roboto_400Regular",
    textAlign: "justify",
  },

  location: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.secondary,
    padding: 5,
    borderRadius: theme.sizes.large,
  },
  cartRow: {
    marginHorizontal: theme.sizes.large,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.sizes.large,
  },
  cartTitle: {
    marginLeft: theme.sizes.small,
    fontFamily: "Roboto_500Medium",
    fontSize: theme.sizes.medium,
    color: theme.colors.lightWhite,
  },
  addCart: {
    width: 37,
    height: 37,
    backgroundColor: theme.colors.black,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButton: {
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
    width: theme.sizes.width * 0.7,
    borderRadius: theme.sizes.large,
  },
  favButton: {
    backgroundColor: theme.colors.primary,
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
