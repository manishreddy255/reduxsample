import {
  FECTH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialUserState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      console.log("fetch user request is touched *?* ")
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      console.log("fetch users success is touched")
      return {
        loading: false,
        data: action.payload,
        error: ""
      };
    case FECTH_USERS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export default userReducer;