import {adminConstants} from "../actions/constants"; 
const initialState = { 
    users: "",
    loading: true, 
  };
export default (state = initialState, action) => {
    switch (action.type) {
      case adminConstants.SET_LOADING:
        state = {
          ...state,
          error: null,
          loading: true,
        };
        break;
  
      case adminConstants.GET_ALL_USERS:
        state = {
          ...state,
          users: action.payload.users, 
          loading: false,
        };
        break;  
    } 
    return state;
  };