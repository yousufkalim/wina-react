import authReducer from "./auth.reducers";
import studentReducer from "./student";

import globals from "./globals";

import Company from "./company";
import admin from "./admin";

import { combineReducers } from "redux";
import notistack from "./notistack";

const rootReducer = combineReducers({
  auth: authReducer,
  company: Company,
  student: studentReducer,
  globals: globals,
  admin: admin,
  notistack,
});

export default rootReducer;
