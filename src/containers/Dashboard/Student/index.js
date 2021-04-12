import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import StudentDashboard from "./Student";

export default function UnAuth() {
  return (
    <Switch>
      <Route exact path="/" exact component={StudentDashboard} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
