import React, { useState } from "react";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardWithImage from "../../../../../components/UI/CardWithImage/CardWithImage";
import OfferTab from "./OfferTab";

const pre = [
  {
    image: "company-offer-card",
    title: "Store & Supply",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    cdate: "04/10/2020",
  },
  {
    image: "company-offer-card",
    title: "Store & Supply",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    cdate: "04/10/2020",
  },
  {
    image: "company-offer-card",
    title: "Store & Supply",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    cdate: "04/10/2020",
  }
]
const declined = [
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "Voir",
    btn2Gray: "Approuvé",
    cdate: "04/10/2020",
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
    btn2Gray: "Approuvé",
    cdate: "04/10/2020",
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
    btn2Gray: "Approuvé",
    cdate: "04/10/2020",
  }
]


const proposals = [
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
    matches: "90%",
    cdate: "04/10/2020",
  },
];
export default function ViewOffers() {
  const [key, setKey] = useState("PreSelectedOffers");
  return (
    <Tabs
      activeKey={key}
      defaultActiveKey="PreSelectedOffers"
      id="controlled-tab-example"
      className="Profile upper-nav custom-tabs"
      onSelect={(k) => setKey(k)}
    >
      <Tab
        eventKey="PreSelectedOffers"
        title="Offres pré-sélectionnés"
        className="h-100"
        onSelect={(k) => setKey(k)}
      >
        <div className="ViewOffersBox">
        
            <div className="offers custom-box">
              {
                pre.map((item,index) => (
                  <CardWithImage item={item} key={index} eventKey={key}  />
                ))
              }
              {/* <div className="tabOffer">
                <OfferTab eventKey={key} />
              </div> */}
            </div>
          
        </div>
      </Tab>
      <Tab
        eventKey="RefusedOffers"
        title="Offres refusées"
        onSelect={(k) => setKey(k)}
        className="h-100"
      >
        <div className="ViewOffersBox">
          
            <div className="offers custom-box">
            {
                declined.map((item,index) => (
                  <CardWithImage item={item} key={index} eventKey={key}  />
                ))
              }
            </div>
          
        </div>
      </Tab>
      <Tab eventKey="Suggestion" title="Propositions" onSelect={(k) => setKey(k)} className="h-100">
        <div className="ViewOffersBox">
          
            <div className="offers custom-box">
            {
                proposals.map((item,index) => (
                  <CardWithImage item={item} key={index} eventKey={key}  />
                ))
              }
            </div>
          
        </div>
      </Tab>
    </Tabs>
  );
}
