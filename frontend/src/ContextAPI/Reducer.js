import { ADD_ITEM_TO_CART } from "./Constants";

export const initialState ={
    basket: [],
    user: null,
}

const Reducer = (state,action)=>{
    console.log(action,'action')
switch(action.type){
    case ADD_ITEM_TO_CART: 
        return {
            ...state,
            basket: [...state.basket, action.item]
        }
    default: 
    return state;
    
}
}

export default Reducer;