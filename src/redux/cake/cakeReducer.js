import { ADD_CAKE, BUY_CAKE } from "./cakeType";

const inititalState = {
  numOfCakes: 10,
};

const cakeReducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
