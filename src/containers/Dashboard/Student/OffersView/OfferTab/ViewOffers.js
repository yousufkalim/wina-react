import React, { useState } from "react";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardWithImage from "../../../../../components/UI/CardWithImage/CardWithImage";
import { useDispatch, useSelector } from "react-redux";
import OfferCardDetail from "../OfferCardDetail";

export default function ViewOffers() {
  // store
  const store = useSelector((state) => state.jobs);
  let JOBS = store.jobs && store.jobs;
  // state
  const [key, setKey] = useState("PreSelectedOffers");
  const [isDetail, setisDetail] = useState(false);
  const [offerID, setofferID] = useState("");

  const handleDetail = (id) => {
    setofferID(id);
    setisDetail(!isDetail);
  };
  return (
    <>
      {isDetail === false ? (
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
                {JOBS.length > 0 ? (
                  JOBS.map((item, index) => (
                    <CardWithImage
                      item={item}
                      key={index}
                      eventKey={key}
                      handleDetail={handleDetail}
                    />
                  ))
                ) : (
                  <h1 className="text-center">No Offers Found</h1>
                )}
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
                {JOBS.length > 0 ? (
                  JOBS.map((item, index) => (
                    <CardWithImage
                      item={item}
                      key={index}
                      eventKey={key}
                      handleDetail={handleDetail}
                    />
                  ))
                ) : (
                  <h1 className="text-center">No Offers Found</h1>
                )}
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="Suggestion"
            title="Propositions"
            onSelect={(k) => setKey(k)}
            className="h-100"
          >
            <div className="ViewOffersBox">
              <div className="offers custom-box">
                {JOBS.length > 0 ? (
                  JOBS.map((item, index) => (
                    <CardWithImage
                      item={item}
                      key={index}
                      eventKey={key}
                      handleDetail={handleDetail}
                    />
                  ))
                ) : (
                  <h1 className="text-center">No Offers Found</h1>
                )}
              </div>
            </div>
          </Tab>
        </Tabs>
      ) : (
        <OfferCardDetail offerID={offerID} />
      )}
    </>
  );
}
