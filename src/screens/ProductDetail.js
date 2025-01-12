import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/product.style";
import { RatingInput } from "react-native-stock-star-rating";
import { theme } from "../constants/theme";
import {
  AntDesign,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { decrement, handlePress, increment } from "../utils/product_helpers";
import { LoginContext } from "../context/UserLoginContext";
import { FavContext } from "../context/RefectchFavContext";

export default function ProductDetail({ navigation }) {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const { userLogin, setUserLogin } = useContext(LoginContext);
  const { refetchFav, setRefetchFav } = useContext(FavContext);

  const route = useRoute();

  const item = route.params.item;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.path} />
      <View style={styles.details}>
        {/* This is for title and price */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.ratingRow}>
          {/* This is for star rating */}
          <View style={styles.rating}>
            <RatingInput
              rating={rating}
              setRating={setRating}
              size={25}
              maxStars={5}
              color={theme.colors.primary}
            />
            <Text style={styles.rating}>{4.9}</Text>
          </View>

          {/* This is for plus and minus */}
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment(setCount, count)}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.textSpace}>{count}</Text>
            <TouchableOpacity onPress={() => decrement(setCount, count)}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* This is for Showing Description */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>

          <Text style={styles.descriptionText}>
            With the colder month ahead, now's the time to make your home ready
            for snuggle season. Find your perfect sofa for less in our Autumn
            Sale, including high-tech smart sofas and relaxing recliners. Coming
            home just got a which lot cosier. Don't miss out P.S. Shop now for
            delivery in time for fun.
          </Text>
        </View>

        {/*SHOWING LOCATION */}
        <View style={{ marginHorizontal: theme.sizes.medium }}>
          {/* Put everything in a row or horizontally */}
          <View style={styles.location}>
            {/* SHOW ICON AND LOCATION NAME */}
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={18} />
              <View style={{ marginLeft: 10 }}>
                <Text>LONDON ENGLAND</Text>
              </View>
            </View>

            {/* Delivery info showing an icon and text */}
            <View style={{ flexDirection: "row", marginRight: 5 }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={18} />
              <View style={{ marginLeft: 10 }}>
                <Text>Free Delivery</Text>
              </View>
            </View>
          </View>
        </View>
        {/*Cart related information */}
        <View style={styles.cartRow}>
          {/* Fav Button */}
          <TouchableOpacity
            onPress={() =>
              handlePress(userLogin, navigation, item, setRefetchFav)
            }
            style={styles.favButton}
          >
            <AntDesign name="heart" size={20} color={theme.colors.lightWhite} />
          </TouchableOpacity>

          {/* buy Button */}
          <TouchableOpacity
            onPress={() => console.log("buy Tapped")}
            style={styles.buyButton}
          >
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          {/* add cart button */}
          <TouchableOpacity></TouchableOpacity>

          {/* Shopping bag icon */}
          <TouchableOpacity
            onPress={() => console.log("order Tapped")}
            style={styles.addCart}
          >
            <Fontisto
              name="shopping-bag"
              size={22}
              color={theme.colors.lightWhite}
              marginLeft="5%"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
