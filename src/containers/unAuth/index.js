import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Signin";
import Signup from "../Signup";
import LandingPage from "../LandingPage.js/index";
import Business from "../Business/index";
import Cfa from "../Cfa/index";
import Home from "../Home";

export default function UnAuth() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/reset/:id" component={Home} />
      <Route exact path="/landing_page" component={LandingPage} />
      <Route exact path="/Business" component={Business} />
      <Route exact path="/Cfa" component={Cfa} />
      <Route exact path="/verifyEmail/:token" component={Home} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
