import {
  actionTypes,
  companyConstants,
  studentConstants,
} from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  user: "",
  jobs: "",
  studentBySearch: "",
  appliedJobs: "",
  job: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      state = {
        ...state,
        error: null,
        loading: action.loading,
      };
      break;
    case studentConstants.GET_STUDENT_JOB:
      state = {
        ...state,
        loading: false,
        job: action.payload.job,
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
    case companyConstants.COMPANY_CREATE_JOB_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case companyConstants.COMPANY_GET_JOBS_SUCCESS:
      state = {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
      };
      break;
    case companyConstants.GET_APPLIED_JOBS:
      state = {
        ...state,
        loading: false,
        appliedJobs: action.payload.appliedJobs,
      };
      break;
    case companyConstants.GET_STUDENT_BY_SEARCH:
      state = {
        ...state,
        loading: false,
        studentBySearch: action.payload.studentBySearch,
      };
    case companyConstants.OFFER_DECISION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
    case companyConstants.RECIEVED_OFFER_DECISION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
  }

  return state;
};
