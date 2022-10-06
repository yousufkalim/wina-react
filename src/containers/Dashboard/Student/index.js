import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import StudentDashboard from "./Student";
import OfferCardDetail from "./OfferCardDetail";

export default function Student() {
  return (
    <Switch>
      <Route exact path="/students/dashboard" component={StudentDashboard} />
      <Route exact path="/jobDesc" component={OfferCardDetail} />

      <Redirect from="*" to="/students/dashboard" />
    </Switch>
  );
}
