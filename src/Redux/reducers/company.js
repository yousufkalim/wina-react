import { actionTypes, companyConstants } from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  user: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_USER:
      state = {
        ...state,
        error: null,
        loading: action.loading,
      };
      break;

    case companyConstants.COMPANY_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case companyConstants.COMPANY_EMAIL_SENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
  }

  return state;
};
