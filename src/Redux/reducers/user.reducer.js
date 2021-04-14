import {
  studentConstants,
  actionTypes,
  companyConstants,
  authConstants,
} from "../actions/constants";

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
    case actionTypes.SET_LOADING_SCOOL:
      state = {
        ...state,
        error: null,
        loading: action.loading,
      };
      break;

    case studentConstants.STUDENT_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        message: action.payload.message,
      };
      break;
    case companyConstants.COMPANY_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case studentConstants.STUDENT_EMAIL_SENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case studentConstants.STUDENT_SCHOOL_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case studentConstants.STUDENT_DATA_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };

    case studentConstants.PROFESSIONAL_INFO_DELETE_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        user: action.payload.user,
      };
    case studentConstants.SCHOOL_DELETE_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        user: action.payload.user,
      };
      break;
  }

  return state;
};
