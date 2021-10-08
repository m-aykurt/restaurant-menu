import { food } from "../utils/food";

const initialState = {
  data: food,
  cart: [],
  category: ["All", ...new Set(food.map((item) => item.category))],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "CATEGORY":
      if (action.payload === "All") {
        return {
          ...state,
          data: food,
        };
      } else {
        return {
          ...state,
          data: food.filter((item) => item.category === action.payload),
        };
      }
    case "SEARCH":
      return {
        ...state,
        data: food.filter(
          (item) =>
            item.title.toLowerCase() ===
            item.title.includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
