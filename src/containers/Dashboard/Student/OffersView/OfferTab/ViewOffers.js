import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardWithImage from "../../../../../components/UI/CardWithImage/CardWithImage";
import { useDispatch, useSelector } from "react-redux";
import OfferCardDetail from "../OfferCardDetail";
import {
  Offer_Decion_By_Students,
  Get_Student_Jobs,
} from "../../../../../Redux/actions";
export default function ViewOffers() {
  // store
  const store = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  let JOBS = store.jobs && store.jobs;
  let PROPOSED_OFFERS =
    JOBS && JOBS.filter((jb) => jb.student_offer_status === "proposal");
  let ACCEPTED_OFFERS =
    JOBS && JOBS.filter((jb) => jb.student_offer_status === "accepted");
  let REJECTED_OFFERS =
    JOBS && JOBS.filter((jb) => jb.student_offer_status === "rejected");
  // state
  const [key, setKey] = useState("PreSelectedOffers");
  const [isDetail, setisDetail] = useState(false);
  const [offerID, setofferID] = useState("");

  const handleDetail = (id) => {
    setofferID(id);
    setisDetail(!isDetail);
  };

  // offers functions
  const handleOfferAccepted = (id, decision) => {
    dispatch(
      Offer_Decion_By_Students(id, decision, setKey, "PreSelectedOffers")
    );
  };
  const handleOfferRejected = (id, decision) => {
    dispatch(Offer_Decion_By_Students(id, decision, setKey, "RefusedOffers"));
  };
  useEffect(() => {
    dispatch(Get_Student_Jobs());
  }, [key, setKey]);
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
                {ACCEPTED_OFFERS.length > 0 ? (
                  ACCEPTED_OFFERS.map((item, index) => (
                    <CardWithImage
                      item={item}
                      key={index}
                      type="student"
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
                {REJECTED_OFFERS.length > 0 ? (
                  REJECTED_OFFERS.map((item, index) => (
                    <CardWithImage
                      item={item}
                      key={index}
                      type="student"
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
                      type="student"
                      handleOfferAccepted={handleOfferAccepted}
                      handleOfferRejected={handleOfferRejected}
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
        <OfferCardDetail type="student" offerID={offerID} />
      )}
    </>
  );
}
