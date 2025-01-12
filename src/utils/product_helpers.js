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

    //
  }
};
