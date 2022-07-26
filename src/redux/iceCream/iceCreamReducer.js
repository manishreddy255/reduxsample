// import { BUY_CAKE } from "../cake/cakeType";
import { BUY_ICECREAM } from "./iceCreamType";

const initialIceCreamState = {
  numOfIceCream: 20,
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducer
