import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "../Signin";
import Signup from "../Signup";
import LandingPage from "../LandingPage.js/index";
import Business from "../Business/index";
import Cfa from "../Cfa/index";
import Student from "../Student/index";
import Company from "../Company/index";
import Regards from "../Regards/index";
import About from "../About/index";

export default function UnAuth() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/réinitialiser/:id" component={LandingPage} />
      <Route exact path="/Business" component={Business} />
      <Route exact path="/Cfa" component={Cfa} />
      <Route exact path="/Student" component={Student} />
      <Route exact path="/Company" component={Company} />
      <Route exact path="/Regards" component={Regards} />
      <Route exact path="/About" component={About} />
      <Route exact path="/verifyEmail/:token" component={LandingPage} />

      {/* Redirection on 404 routes */}
      <Route
        exact
        path="/*"
        render={() => {
          let { pathname } = window.location;
          pathname = pathname.split("/")[1];
          if (pathname !== "students" && pathname !== "companies" && pathname !== "admins") {
            history.push("/");
          }
        }}
      />
    </Switch>
  );
}
