import {
  authConstants,
  actionTypes,
  studentConstants,
} from "../actions/constants";

const initialState = {
  token: null,
  user: "",
  auth: false,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_AUTH:
      state = {
        ...state,
        error: null,
        loading: action.loading,
      };
      break;

    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        auth: true,
        loading: action.payload.loading,
      };
      break;

    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
        auth: false,
        loading: action.loading,
      };
      break;
    case studentConstants.STUDENT_DATA_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    case studentConstants.REQUEST_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case studentConstants.RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case authConstants.EMAIL_VERIFY_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
  }

  return state;
};
