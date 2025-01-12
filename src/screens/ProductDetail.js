import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/product.style";
import { RatingInput } from "react-native-stock-star-rating";
import { theme } from "../constants/theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import { decrement, increment } from "../utils/product_helpers";

export default function ProductDetail() {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);
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
          <Text style={styles.descriptionTitle}></Text>

          <Text style={styles.descriptionText}></Text>
        </View>
      </View>
    </View>
  );
}
