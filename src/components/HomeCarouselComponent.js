import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

const images = [
  {
    id: "1A",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    path: require("../../assets/images/fn1.jpg"),
  },
];

const HomeCarouselComponent = () => {
  return (
    <View>
      <View
        style={{
          height: 200,
          backgroundColor: theme.colors.offWhite,
          marginHorizontal: theme.sizes.medium,
          borderRadius: theme.sizes.medium,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Image
              style={{ resizeMethod: "cover", width: width, height: "100%" }}
              source={item.path}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default HomeCarouselComponent;
