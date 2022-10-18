import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BrowseOffers from '../../../containers/Dashboard/Company/AnnoncesView/BrowseOffers';

import CompanyDashboard from './Company';
// import RoutesSidebar from './Routes/index';

export default function UnAuth() {
  return (
    <CompanyDashboard />

    // <Switch>
    //   <Route exact path="/companies/dashboard" component={CompanyDashboard} />
    //   <Route exact path="/companies/dashboard/presentationcompany" component={BrowseOffers} />

    //   <Redirect from="*" to="/" />
    // </Switch>
  );
}
