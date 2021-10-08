export const addToCart = (item) => {
  console.log(item.id);
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const categoryClick = (category) => {
  return {
    type: "CATEGORY",
    payload: category,
  };
};

export const search = (searchWord) => {
  return {
    type: "SEARCH",
    payload: searchWord,
  };
};
