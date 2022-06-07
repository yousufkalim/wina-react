import React from "react";
import { Row, Col, Tab, Nav, Image, Container } from "react-bootstrap";
import DashbordView from "./DashbordView";
import { useDispatch, useSelector } from "react-redux";
import OffersView from "./OffersView";
import Loader from "../../../components/UI/Loader";
import Coaching from "./CoachingView";
import Drawer from "../../../components/Drawer";
const Dashboard = (props) => {
  return (
    <div className="dashbordMain">
      <Drawer />
      {/* <Tab.Container id="dashbordBox" defaultActiveKey="first">
        <div className="h-100 w-100 d-flex justify-content-between">
          <div className="main-coloum " style={{ height: "100vh" }}>
            <Nav variant="pills" className="flex-column align-items-center">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <div className="imagebackground">
                    <Image className="hideOnactive img-fluid" src="../images/dashboard.png" />
                    <Image className="showonactive img-fluid" src="../images/dashboard_hover.png" />
                  </div>
                  <div className="label">Dashboard</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <div className="imagebackground">
                    <Image className="hideOnactive" src="../images/offers.png" />
                    <Image className="showonactive" src="../images/offer_hover.png" />
                  </div>
                  <div className="label">Offers</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <div className="imagebackground">
                    <Image className="showonactive" src="../images/twomen.png" />
                    <Image className=" hideOnactive" src="../images/twomen_hover.png" />
                  </div>
                  <div className="label">Coaching</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">
                  <div className="imagebackground">
                    <Image className="showonactive" src="../images/twomen.png" />
                    <Image className=" hideOnactive" src="../images/twomen_hover.png" />
                  </div>
                  <div className="label">Drawer</div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <div className="main-column-2" style={{ height: "100vh" }}>
            <Tab.Content className="h-100">
              <Tab.Pane eventKey="first" className="h-100">
                <DashbordView />
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="h-100">
                <OffersView />
              </Tab.Pane>
              <Tab.Pane eventKey="third" className="h-100">
                <Coaching />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth" className="h-100">
                <Drawer />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container> */}
    </div>
  );
};
export default Dashboard;
