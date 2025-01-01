import { Image, Text, View } from "react-native";
import { theme } from "../constants/theme";

const HomeCarouselComponent = () => {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: theme.colors.offWhite,
        marginHorizontal: theme.sizes.medium,
        borderRadius: theme.sizes.medium,
        overflow: "hidden",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      <Image
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
        source={require("../../assets/images/fn1.jpg")}
      />
    </View>
  );
};

export default HomeCarouselComponent;
