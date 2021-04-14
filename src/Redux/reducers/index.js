import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import orderReducer from "./order.reducer";
import pageReducer from "./page.reducer";
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
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
  page: pageReducer,
  globals: globals,
  notistack,
});

export default rootReducer;
