export const increment = (setCount, count) => {
  setCount(count + 1);
};

export const decrement = (setCount, count) => {
  if (count > 1) {
    setCount(count - 1);
  }
};

export const handlePress = async (userLogin, navigation, item, setRefetch) => {
  if (userLogin == false) {
    // Go to a different page
    console.log("handle Press");
  } else {
    try {
      //userid
      const userId = 1;
      const data = {
        userId: userId,
        productId: item.id,
        image: item.imageUrl,
        price: item.price,
        title: item.title,
      };

      console.log("Sending Mock Data", data);

      //endPoint
      const response = await mockApiCall(data);

      //response
      if (response.status == 201 || response.status == 200) {
        setRefetch(response.data.productId);
        console.log("Set Fav Item");
      }
    } catch (error) {
      console.log("Error", e);
    }
  }
};

export const handleCart = async (
  navigation,
  item,
  count,
  userLogin,
  setUserCart
) => {
  if (userLogin == false) {
    //navigate to loginPage
    
  } else {
    console.log("user has logged in");
  }
};

const mockApiCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 201,
        data: { productId: data.productId },
      });
    }, 1000);
  });
};
