import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CompanyDashboard from "./Company";

export default function UnAuth() {
  return (
    <Switch>
      <Route exact path="/companies/dashboard" exact component={CompanyDashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
