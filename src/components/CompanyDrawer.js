import React, { useEffect, useState } from "react";
import logo from "../assets/WinaaLogo.svg";
import Dashboard from "../assets/Vector.svg";
import ArrowDown from "../assets/Vector1.svg";
import Offer from "../assets/Group2.svg";
import Coaching from "../assets/Group3.svg";
import ArrowUp from "../assets/Vector3.svg";
import SignOut from "../assets/signout.svg";
import { Tab, Nav } from "react-bootstrap";
import Header from "../containers/Dashboard/Components/header";
import Footer from "../containers/Dashboard/Components/footer";
import BrowseOffers from "../containers/Dashboard/Company/AnnoncesView/BrowseOffers";
import OverviewOfOffers from "../containers/Dashboard/Company/AnnoncesView/OverviewOfOffers";
import RDV from "../containers/Dashboard/Company/CoachingView/RDV";
import Offers from "../containers/Dashboard/Company/CoachingView/Offres";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signout } from "../Redux/actions";
const Drawer = () => {
  const dispatch = useDispatch();

  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected("BrowseOffers");
    setArrowUp1(!arrowUp1);
    setOpen1(!open1);
  }, []);

  const handleArrowUp1 = () => {
    setArrowUp1(!arrowUp1);
    setOpen1(!open1);
    setArrowUp2(false);

    setOpen2(false);
  };
  const handleArrowUp2 = () => {
    setArrowUp2(!arrowUp2);
    setOpen2(!open2);
    setArrowUp1(false);

    setOpen1(false);
  };

  const handleClick = (e) => {
    setSelected(e);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="main_drawer_div">
          <div className="dashbordlogo">
            <img src={logo} />
          </div>
          <div className="drawer_head_text_div1" style={{ borderBottom: !open1 && "1px solid #E5E7ED" }} onClick={handleArrowUp1}>
            <div className="drawer_left_text">
              <img src={Dashboard} className="home_icon" />
              <span className="drawer_head_text">Annonces</span>
            </div>
            <img src={arrowUp1 === false ? ArrowDown : ArrowUp} className="arrow_icon" />
          </div>
          <div style={{ display: !open1 && "none" }}>
            <div className="dashbord-column">
              <div
                onClick={() => handleClick("BrowseOffers")}
                className={selected === "BrowseOffers" ? "selected_option" : "not_selected_option"}
              >
                Parcourir les offres
              </div>
              <div
                onClick={() => handleClick("OverviewOfOffers")}
                className={selected === "OverviewOfOffers" ? "selected_option" : "not_selected_option"}
              >
                ue générale des offres
              </div>
            </div>
          </div>
          <div
            className="drawer_head_text_div2"
            style={{
              borderBottom: !open2 && "1px solid #E5E7ED",
              borderTop: open1 && "1px solid #E5E7ED",
              marginTop: open1 && "2.5rem",
            }}
            onClick={handleArrowUp2}
          >
            <div className="drawer_left_text">
              <img src={Offer} className="home_icon" />
              <span className="drawer_head_text">Accompagnement</span>
            </div>
            <img src={arrowUp2 === false ? ArrowDown : ArrowUp} className="arrow_icon" />
          </div>
          <div style={{ display: !open2 && "none" }}>
            <div className="dashbord-column">
              <div
                onClick={() => handleClick("Offers")}
                className={selected === "Offers" ? "selected_option" : "not_selected_option"}
              >
                Offres
              </div>
              <div onClick={() => handleClick("RDV")} className={selected === "RDV" ? "selected_option" : "not_selected_option"}>
                RDV
              </div>
            </div>
          </div>
          <div
            onClick={() => dispatch(signout())}
            style={{ position: "absolute", bottom: "3%", left: "2.4%", color: "#FF285C", fontSize: "1.1rem", cursor: "pointer" }}
          >
            <Image src={SignOut} /> Se déconnecter
          </div>
        </div>

        <div className="dashbordLayout">
          <Header />
          <div className="dashbord_view_div">
            {selected === "BrowseOffers" ? (
              <BrowseOffers />
            ) : selected === "OverviewOfOffers" ? (
              <OverviewOfOffers />
            ) : selected === "RDV" ? (
              <RDV />
            ) : selected === "Offers" ? (
              <Offers />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
