import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Tab, Tabs, Image, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import OfferCardItem from '../../../../../components/UI/CardWithImage/OfferCardItem';
import CardWithImage from "../../../../../components/UI/CardWithImage/CardWithImage";
import CompanyCardDetail from "./CompanyCardDetail/CompanyCardDetail";



const overviewOffers = [
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    matches: "+ de 10 Match",
    
  },
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    matches: "+ de 10 Match",
  },
]

const matchSent = [
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    matches: "Match (12)",
    
  },
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    matches: "Match (12)",
  },
]


const matchReceive = [
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    matches: "Match (12)"
  },
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    matches: "Match (12)"
  },

]

const matchsentItems = [
  {
    image: "user1",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn3: "Refuser",
    matches: "90%",
    cdate: "04/10/2020"
  },
  {
    image: "user1",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn3: "Refuser",
    matches: "90%",
    cdate: "04/10/2020",
  },
];

const matchUsers = [
  {
    image: "user1",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn2: "Accepter",
    btn3: "Refuser",
    matches: "90%",
    cdate: "04/10/2020",
  },
  {
    image: "user1",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn2: "Accepter",
    btn3: "Refuser",
    matches: "40%",
    cdate: "04/10/2020",
  },
 
];

const matchReceive2 = [
  {
    image: "user1",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn2: "Accepter",
    btn3: "Refuser",
    calender: true
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const OverviewOfOffers = () => {
  const [key, setKey] = useState("Offres");
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const [isDetail, setIsDetail] = useState(false);
  const [matchSentDetail, setMatchSentDetail] = useState(false);
  const [matchReceiveDetail, setMatchReceiveDetail] = useState(false);
  const [userDetail, setUserDetail] = useState(false);

  const ProfessionalCareerModal = () => {
    setShow(!show);
  };

  useEffect(() => {
      setIsDetail(false);
      setMatchSentDetail(false);
      setMatchReceiveDetail(false);
  }, [])
  
  const setDetailHandler = (btn) => {
    setIsDetail(btn);
  }

  const matchSentDetailHandler = (btn) => {
    setMatchSentDetail(btn);
  }

  const matchReceiveDetailHandler = (btn) => {
    setMatchReceiveDetail(btn);
  }

  const userDetailHandler = (btn) => {
    setUserDetail(btn);
  }

  return (
  
      <Tabs
        activeKey={key}
        id="OverviewOfOffers"
        className="OverviewOfOffers upper-nav custom-tabs"
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Offres" title="Offres" className="h-100">
          <div className="AnnoncesViewOffersBox">
           
              {
                isDetail === false ? (
                  <div className="offers custom-box">
                  {
                    overviewOffers.map((item, index) => (
                      <CardWithImage key={index} item={item} setDetailHandler={setDetailHandler} />
                    ))
                  }
              </div>
                )
                :
                (
                  <CompanyCardDetail isPerc />
                )
              }
              
          
          </div>
        </Tab>
        <Tab eventKey="Matchsent" title="Match envoyé" className="h-100" >
        <div className="AnnoncesViewOffersBox">
            
              
                <div className="offers custom-box">
                  {
                    
                    matchSentDetail === false ?  matchSent.map((item, index) => (
                      <CardWithImage key={index} item={item} setDetailHandler={matchSentDetailHandler} />
                    ))
                    :
                    matchsentItems.map((item, index) => (
                      <CardWithImage key={index} item={item} />
                    ))
                  }
              </div>
                     
            
          </div>
        </Tab>
        <Tab eventKey="MatchReceived" title="Match reçu" className="h-100">
        <div className="AnnoncesViewOffersBox">
           
              
                <div className="offers custom-box">
                  {
                    
                    matchReceiveDetail === false ?  matchReceive.map((item, index) => (
                      <CardWithImage key={index} item={item} setDetailHandler={matchReceiveDetailHandler} />
                    ))
                    :
                    matchReceiveDetail === true && userDetail === false ?
                      (
                        matchUsers.map((item, index) => (
                          <CardWithImage item={item} key={index} setDetailHandler={userDetailHandler} />
                        ))
                      )
                      :
                      (
                        <CardWithImage item={matchReceive2[0]} />
                      )
                   
                  }
              </div>
                     
           
          </div>
        </Tab>
      </Tabs>

  );
};
export default OverviewOfOffers;
