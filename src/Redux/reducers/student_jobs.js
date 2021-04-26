import { studentConstants } from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  jobs: "",
};

export default (state = initState, action) => {
  switch (action.type) {
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
    case studentConstants.OFFER_DECISION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
  }

  return state;
};
