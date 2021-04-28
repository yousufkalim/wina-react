import { actionGlobals, actionTypes } from "../actions/constants";

const initialState = {
  items: "",
  loading: false,
  error: "",
  soft_skills: "",
  hard_skills: "",
  notifications: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionGlobals.SET_ADDRESS_LOADING:
      state = {
        ...state,
        error: null,
        loading: action.loading,
      };

      break;
    case actionGlobals.ADDRESS_TO_SUCCESS:
      state = {
        ...state,
        error: null,
        items: action.items,
      };
      break;
    case actionGlobals.GET_SOFT_SKILLS_SUCCESS:
      state = {
        ...state,
        error: null,
        soft_skills: action.skills,
        loading: action.loading,
      };
    case actionGlobals.GET_HARD_SKILLS_SUCCESS:
      state = {
        ...state,
        error: null,
        hard_skills: action.skills,
        loading: action.loading,
      };
      break;
    case actionTypes.SET_REQUEST_PASSWORD_LOADING:
      state = {
        ...state,
        error: null,
        loading: action.loading,
      };
      break;
    case actionGlobals.GET_ALL_NOTIFICATIONS_SUCCESS:
      state = {
        ...state,
        error: null,
        loading: false,
        notifications: action.payload.notifications,
      };
      break;
  }

  return state;
};
