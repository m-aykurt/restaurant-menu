export const addToCart = (item) => {
    console.log(item.id)
  return {
    type: "ADD_CART",
    payload: item,
  };
};
