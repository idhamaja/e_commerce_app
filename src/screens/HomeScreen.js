import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from "../components/HomeCarouselComponent";
import HomeHeadingComponent from "../components/HomeHeadingComponent";
import ProductCardComponent from "../components/ProductCardComponent";
import fetchHomeProduct from "../hooks/fetchHomeProduct";
import LoadingErrorComponent from "../components/LoadingErrorComponent";

const HomeScreen = () => {
  const { isLoading, data, error } = fetchHomeProduct();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadingErrorComponent isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <FlatList
          data={data} // Pastikan data valid
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardComponent item={item} />}
          numColumns={2}
          ListHeaderComponent={() => (
            <>
              <WelcomeComponent />
              <HomeCarouselComponent />
              <HomeHeadingComponent />
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
