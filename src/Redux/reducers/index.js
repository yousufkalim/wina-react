import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";

import globals from "./globals";
import StudentJobs from "./student_jobs";
import Company from "./company";

import { combineReducers } from "redux";
import notistack from "./notistack";

const rootReducer = combineReducers({
  auth: authReducer,
  company: Company,
  user: userReducer,
  jobs: StudentJobs,
  globals: globals,
  notistack,
});

export default rootReducer;
