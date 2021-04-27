import authReducer from "./auth.reducers";
import studentReducer from "./student";

import globals from "./globals";

import Company from "./company";

import { combineReducers } from "redux";
import notistack from "./notistack";

const rootReducer = combineReducers({
  auth: authReducer,
  company: Company,
  student: studentReducer,
  globals: globals,
  notistack,
});

export default rootReducer;
