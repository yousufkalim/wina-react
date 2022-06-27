import React from "react";
import { Row, Col, Tab, Nav, Image, Container } from "react-bootstrap";
import Annonces from "./AnnoncesView";
import Coaching from "./CoachingView";
import CompanyDrawer from "../../../components/CompanyDrawer";

const Dashboard = (props) => {
  return (
    <div className="dashbordMain">
      <CompanyDrawer />
    </div>
  );
};
export default Dashboard;
