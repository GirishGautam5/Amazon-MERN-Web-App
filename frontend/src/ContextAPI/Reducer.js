import { ADD_ADDRESS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./Constants";

export const initialState = {
  basket: [],
  user: null,
  address: {},
};

export const getTotalCartPrice = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const Reducer = (state, action) => {
  console.log(action, "action");
  console.log(state, "state");
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_ITEM_FROM_CART:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state?.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case ADD_ADDRESS:
        return{
            ...state,
            address: {...action.item}
        }
    default:
      return state;
  }
};

export default Reducer;
