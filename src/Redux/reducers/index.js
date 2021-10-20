import authReducer from "./auth";
import Student from "./student";

import globals from "./globals";

import Company from "./company";
import admin from "./admin";

import { combineReducers } from "redux";
import notistack from "./notistack";

const rootReducer = combineReducers({
  auth: authReducer,
  company: Company,
  student: Student,
  globals: globals,
  admin: admin,
  notistack,
});

export default rootReducer;
