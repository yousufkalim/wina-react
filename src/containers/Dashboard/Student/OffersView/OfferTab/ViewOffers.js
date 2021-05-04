import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardWithImage from "../../../../../components/UI/CardWithImage/CardWithImage";
import { useDispatch, useSelector } from "react-redux";
import OfferCardDetail from "../OfferCardDetail";
import {
  Offer_Decion_By_Students,
  Get_Student_Jobs,
  Get_Student_Applied_Jobs,
  Get_Student_Rejected_Jobs,
  GetCompanyAppliedJobs,
  RecievedOffer_Decion_By_Students,
  GetStudentAppliedSuccessJobs,
} from "../../../../../Redux/actions";
export default function ViewOffers() {
  // store
  const dispatch = useDispatch();

  const store = useSelector((state) => state.student);
  let JOBS = store.jobs && store.jobs;
  let APPLIED_JOBS = store.appliedJobs && store.appliedJobs;
  let ACCEPTED_JOBS = store.student_Jobs && store.student_Jobs;

  let COMPANY_APPLIED_JOBS =
    store.company_appliedJobs && store.company_appliedJobs;

  let REJECTED_OFFERS = store.rejectedJobs && store.rejectedJobs;
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
  const handlerRecievedOfferAccepted = (id, decision) => {
    dispatch(
      RecievedOffer_Decion_By_Students(
        id,
        decision,
        setKey,
        "PreSelectedOffers"
      )
    );
  };
  const handlerRecievedOfferRejected = (id, decision) => {
    dispatch(
      RecievedOffer_Decion_By_Students(id, decision, setKey, "RefusedOffers")
    );
  };
  const handleOfferRejected = (id, decision) => {
    dispatch(Offer_Decion_By_Students(id, decision, setKey, "RefusedOffers"));
  };
  useEffect(() => {
    dispatch(Get_Student_Jobs());
    dispatch(Get_Student_Applied_Jobs());
    dispatch(Get_Student_Rejected_Jobs());
    dispatch(GetCompanyAppliedJobs());
    dispatch(GetStudentAppliedSuccessJobs());
  }, [key, setKey, isDetail]);

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
                {APPLIED_JOBS && APPLIED_JOBS.length > 0 ? (
                  APPLIED_JOBS.map((item, index) => (
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
                {REJECTED_OFFERS && REJECTED_OFFERS.length > 0 ? (
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
            eventKey="OffersRecieved"
            title="Propositions"
            onSelect={(k) => setKey(k)}
            className="h-100"
          >
            <div className="ViewOffersBox">
              <div className="offers custom-box">
                {COMPANY_APPLIED_JOBS && COMPANY_APPLIED_JOBS.length > 0 ? (
                  COMPANY_APPLIED_JOBS.map((item, index) => (
                    <CardWithImage
                      item={item}
                      key={index}
                      type="student"
                      handleOfferAccepted={handlerRecievedOfferAccepted}
                      handleOfferRejected={handlerRecievedOfferRejected}
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
        <OfferCardDetail
          type="student"
          offerID={offerID}
          setisDetail={setisDetail}
        />
      )}
    </>
  );
}
