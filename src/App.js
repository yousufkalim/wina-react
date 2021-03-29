import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData } from "./actions";
import StudentDashboard from "./containers/Dashboard/Student";
import CompanyDashboard from "./containers/Dashboard/Company";
import OfferCardDetail from "./containers/Dashboard/Student/OffersView/ResearchTab/OfferCardDetail";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Switch>
        {/* <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} /> */}

        <Route path="/" exact component={Home} />
        <Route path="/student/dashboard" exact component={StudentDashboard} />
        {/* <Route path="/student/dashboard/detail" exact component={OfferCardDetail} /> */}
        <Route path="/company/dashboard" exact component={CompanyDashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
