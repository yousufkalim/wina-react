import { studentConstants, actionTypes } from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  user: "",
  jobs: "",
  rejectedJobs: "",
  appliedJobs: "",
  job: "",
  company_appliedJobs: "",
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

    // jobs
    case studentConstants.GET_STUDENT_JOBS:
      state = {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
      };
      break;
    case studentConstants.GET_STUDENT_JOB:
      state = {
        ...state,
        loading: false,
        job: action.payload.job,
      };
      break;
    case studentConstants.GET_STUDENT_APPLIED_JOBS:
      state = {
        ...state,
        loading: false,
        appliedJobs: action.payload.appliedJobs,
      };
      break;
    case studentConstants.CANCEL_OFFER_DECISION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case studentConstants.GET_COMPANY_APPLIED_JOBS:
      state = {
        ...state,
        loading: false,
        company_appliedJobs: action.payload.company_appliedJobs,
      };
      break;
    case studentConstants.GET_STUDENT_REJECTED_JOBS:
      state = {
        ...state,
        loading: false,
        rejectedJobs: action.payload.rejectedJobs,
      };
      break;
    case studentConstants.OFFER_DECISION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
  }

  return state;
};
