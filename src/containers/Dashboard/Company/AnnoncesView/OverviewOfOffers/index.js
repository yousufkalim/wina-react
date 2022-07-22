import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Tab, Tabs, Image, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import OfferCardItem from "../../../../../components/UI/CardWithImage/OfferCardItem";
import CardWithImage from "../../../../../components/UI/CardWithImage/CardWithImage";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CompanyCardDetail from "./CompanyCardDetail/CompanyCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { baseUri } from "../../../../../urlConfig";
import { DEFAULT_IMAGE } from "../../../../../Globals/index";
import InfoCard from "../../../../../components/UI/InfoCard/InfoCard";
import SubmitButton from "../../../../../components/UI/Button";
import BookingModal from "../../../../../components/UI/Modal";
import Calendar from "../../../../../components/UI/DateTimePicker";
import Chip from "../../../../../components/UI/Chip";
import CVEngine from "../../../Student/DashbordView/ProfessionalProfile/CVEngine";
import {
  Get_Company_Jobs,
  Offer_Decion_By_Company,
  Get_Applied_Jobs,
  RecievedOffer_Decion_By_Company,
  Get_Company_Applied_Jobs,
  Cancel_Offer_Decion_By_Company,
  Booking_Decion_By_Company,
  Get_Job,
} from "../../../../../Redux/actions";
import moment from "moment";
import Behance from "../../../../../assets/Behance.png";
import Dribble from "../../../../../assets/Dribble.png";
import Linkedin from "../../../../../assets/linkedIn.svg";
const OverviewOfOffers = () => {
  const store = useSelector((state) => state.company);
  const dispatch = useDispatch();
  let JOBS = store.jobs && store.jobs;
  let STUDENT = store.studentBySearch && store.studentBySearch;
  let ACCEPTED_OFFERS =
    JOBS && JOBS.filter((jb) => jb.offer_status === "accepted");
  let RECIEVED_OFFERS = store.student_appliedJobs && store.student_appliedJobs;
  let SENT_OFFERS = store.company_appliedJobs && store.company_appliedJobs;
  let OFFER_SENT = [];
  JOBS.map((item) =>
    item.company_requests.map((offer) => {
      if (offer.status === "requested") OFFER_SENT.push(offer);
    })
  );
  let OFFER_REJECTED = [];
  JOBS.map((item) =>
    item.company_requests.map((offer) => {
      if (offer.status === "rejected") OFFER_REJECTED.push(offer);
    })
  );

  const [key, setKey] = useState("Offres");
  const [key2, setKey2] = useState("first");
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const [matchSentDetail, setMatchSentDetail] = useState(false);
  const [matchReceiveDetail, setMatchReceiveDetail] = useState(false);
  const [userDetail, setUserDetail] = useState(false);
  const [isDetail, setisDetail] = useState(false);
  const [offerID, setofferID] = useState("");
  const [RecievofferID, setRecievofferID] = useState("");
  const [bookingSlot, setbookingSlot] = useState();
  const [date, setDate] = useState();
  const [AppointmentsArray, setAppointmentsArray] = useState("");
  const [SentfferID, setSentfferID] = useState("");
  const [jobID, setjobID] = useState("");
  const [booking, setBooking] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [studentDetail, setstudentDetail] = useState(false);
  const [studentID, setstudentID] = useState("");
  const [bookingstudentID, setbookingstudentID] = useState("");
  const [isnext, setIsNext] = useState(false);
  const [studentFormData, setstudentFormData] = useState("");
  // offers functions
  const handleOfferAccepted = (id, offerID, decision) => {
    setjobID(offerID);
    dispatch(Offer_Decion_By_Company(id, offerID, decision, setKey, "Offres", setisDetail, setstudentDetail, handleBooking));
  };
  const handlerRecievedOfferAccepted = (id, jobID, decision) => {
    setjobID(jobID);

    dispatch(
      RecievedOffer_Decion_By_Company(
        id,
        RecievofferID,
        decision,
        setKey,
        "Offres",
        setstudentDetail,
        setMatchReceiveDetail,
        handleBooking
      )
    );
  };
  const handlerRecievedOfferRejected = (id, decision) => {
    dispatch(
      RecievedOffer_Decion_By_Company(id, RecievofferID, decision, setKey, "Offres", setstudentDetail, setMatchReceiveDetail)
    );
  };

  const handleOfferRejected = (id, offerID, decision) => {
    dispatch(Offer_Decion_By_Company(id, offerID, decision, setKey, "MatchReceived"));
  };

  const handleStudentDetail = (id) => {
    setstudentID(id);
    setstudentDetail(!studentDetail);
  };
  const handleRecievedStudentDetail = (id) => {
    if (RECIEVED_OFFERS && RECIEVED_OFFERS.length > 0) {
      let fill = RECIEVED_OFFERS.find((dt) => dt.student._id === id);
      setstudentDetail(!studentDetail);
      setstudentFormData(fill.student);
    }
  };
  const handleSentStudentDetail = (id) => {
    if (SENT_OFFERS && SENT_OFFERS.length > 0) {
      let fill = SENT_OFFERS.find((dt) => dt.student._id === id);
      setstudentDetail(!studentDetail);
      setstudentFormData(fill.student);
    }
  };
  const handleCancelOffer = (id, decision) => {
    dispatch(Cancel_Offer_Decion_By_Company(id, SentfferID, setKey, "Offres", setstudentDetail, setMatchSentDetail, setisDetail));
  };
  useEffect(() => {
    if (studentID && STUDENT) {
      let fill = STUDENT.find((dt) => dt._id === studentID);
      setstudentFormData(fill);
    }
  }, [studentID]);
  useEffect(() => {
    setIsNext(false);
  }, []);

  useEffect(() => {
    dispatch(Get_Company_Jobs());
    if (SentfferID) {
      dispatch(Get_Company_Applied_Jobs(SentfferID));
    } else if (RecievofferID) {
      dispatch(Get_Applied_Jobs(RecievofferID));
    }
  }, [key, setKey, setSentfferID, setRecievofferID]);

  const handleDetail = (id) => {
    dispatch(Get_Job(id));
    setofferID(id);
    setisDetail(!isDetail);
  };

  const matchSentDetailHandler = (id) => {
    dispatch(Get_Company_Applied_Jobs(id));
    setSentfferID(id);
    setMatchSentDetail(!matchSentDetail);
  };

  const matchReceiveDetailHandler = (id) => {
    setRecievofferID(id);
    dispatch(Get_Applied_Jobs(id));
    setMatchReceiveDetail(!matchReceiveDetail);
  };

  const userDetailHandler = (btn) => {
    setUserDetail(btn);
  };
  const handleBooking = (id) => {
    if (booking === false && id) {
      setbookingstudentID(id);
    }
    setAppointmentsArray([]);
    setBooking(!booking);
  };
  const handleSubmitBooking = () => {
    if (AppointmentsArray) {
      dispatch(Booking_Decion_By_Company(AppointmentsArray, bookingstudentID, jobID));
      setBooking(!booking);
    } else {
      setBookingError("Veuillez ajouter au moins un rendez-vous");
    }
  };
  const handleTabSelect = (k) => {
    dispatch(Get_Company_Jobs());
    setKey(k);
  };

  const handleMultipleAppointments = () => {
    if (bookingSlot !== undefined) {
      if (AppointmentsArray && AppointmentsArray.length > 0) {
        let fill = AppointmentsArray.some((ft) => ft == bookingSlot);
        if (fill == true) {
          setBookingError("Le rendez-vous existait déjà");
        } else {
          setAppointmentsArray([...AppointmentsArray, bookingSlot]);
          setbookingSlot("");
          setBookingError("");
        }
      } else {
        setAppointmentsArray([...AppointmentsArray, bookingSlot]);
        setbookingSlot("");
        setBookingError("");
      }
    } else {
      setBookingError("Obligatoire");
    }
  };
  if (studentDetail === false) {
    return (
      <>
        <BookingModal
          modalTitle="Bonne nouvelle ! Ce candidat match avec votre offre, proposez-lui un ou plusieurs créneaux pour l'entretien."
          show={booking}
          className="custom-modal"
          handleClose={() => setBooking(false)}
          children={
            <div class="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="card-with-image-calender-container">
                    <div className="card-with-image-calender-wrapper">
                      <div className="card-with-image-calender-heading">Réserver un créneau horaire</div>
                    </div>

                    <div className="card-with-image-calender-wrapper">
                      <div className="card-with-image-calender">
                        <div className="d-flex jsutify-content-betweeen">
                          <Calendar
                            dateValue={date}
                            onChange={(d) => {
                              setDate(d);
                              setbookingSlot(moment(d).format("YYYY-MM-DDThh:mm"));
                            }}
                          />
                          <div className="ml-3">
                            <SubmitButton
                              className="Enregistrer"
                              onClick={handleMultipleAppointments}
                              variant="primary"
                              value="Ajouter"
                            />
                          </div>
                        </div>
                        <div>{bookingError ? <div className="formikErrorAuto">{bookingError}</div> : ""}</div>
                      </div>
                    </div>
                    <div style={{ height: "200px", overflow: "auto" }}>
                      <Chip data={AppointmentsArray} />
                    </div>

                    <div className="text-right">
                      <SubmitButton
                        className="Enregistrer"
                        onClick={handleSubmitBooking}
                        variant="primary"
                        value="Envoyer mes propositions de RDV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        {isDetail === false ? (
          <Tabs
            activeKey={key}
            id="OverviewOfOffers"
            className="OverviewOfOffers upper-nav custom-tabs"
            onSelect={(k) => handleTabSelect(k)}
          >
            <Tab eventKey="Offres" title="Offres" className="h-100">
              <div className="AnnoncesViewOffersBox">
                <div className="offers custom-box">
                  {JOBS && JOBS.length > 0 ? (
                    JOBS.map((item, index) => (
                      // <div style={{ display: isDetail === true && "none" }}>
                      <CardWithImage item={item} key={index} type="company" eventKey={key} handleDetail={handleDetail} />
                      // </div>
                    ))
                  ) : (
                    <h1 className="text-center">Il n'y a pas de candidats</h1>
                  )}
                </div>
              </div>
            </Tab>
            <Tab eventKey="SentMatches" title="Match envoyé" className="h-100">
              <div className="AnnoncesViewOffersBox">
                <div className="offers custom-box">
                  {matchSentDetail === false ? (
                    OFFER_SENT && OFFER_SENT.length > 0 ? (
                      OFFER_SENT.map((item, index) => {
                        return <CardWithImage key={index} item={item} type="matchSent" handleDetail={handleStudentDetail} />;
                      })
                    ) : (
                      <h1 className="text-center">Il n'y a pas de candidats</h1>
                    )
                  ) : SENT_OFFERS && SENT_OFFERS.length > 0 ? (
                    SENT_OFFERS.map((item, index) => (
                      <CardWithImage
                        key={index}
                        item={item.student}
                        status={item.status}
                        eventKey={key}
                        type="student_offers"
                        handleDetail={handleSentStudentDetail}
                        handleOfferRejected={handleCancelOffer}
                        matchReceiveDetailHandler={matchReceiveDetailHandler}
                        offerID={offerID}
                      />
                    ))
                  ) : (
                    <h1 className="text-center">Il n'y a pas de candidats</h1>
                  )}
                </div>
              </div>
            </Tab>
            <Tab eventKey="MatchReceived" title="Match reçu" className="h-100">
              <div className="AnnoncesViewOffersBox">
                <div className="offers custom-box">
                  {matchReceiveDetail === false ? (
                    OFFER_REJECTED && OFFER_REJECTED.length > 0 ? (
                      OFFER_REJECTED.map((item, index) => (
                        <CardWithImage
                          key={index}
                          item={item}
                          eventKey={key}
                          type="matchSent"
                          handleDetail={handleStudentDetail}
                        />
                      ))
                    ) : (
                      <h1 className="text-center">Il n'y a pas de candidats</h1>
                    )
                  ) : RECIEVED_OFFERS && RECIEVED_OFFERS.length > 0 ? (
                    RECIEVED_OFFERS.map((item, index) => (
                      <CardWithImage
                        key={index}
                        item={item.student}
                        eventKey={key}
                        jobID={item.jobID}
                        status={item.status}
                        type="student_offers"
                        handleBooking={handleBooking}
                        handleDetail={handleRecievedStudentDetail}
                        handleOfferAccepted={handlerRecievedOfferAccepted}
                        handleOfferRejected={handlerRecievedOfferRejected}
                        offerID={offerID}
                      />
                    ))
                  ) : (
                    <h1 className="text-center">Il n'y a pas de candidats</h1>
                  )}
                </div>
              </div>
            </Tab>
          </Tabs>
        ) : (
          <CompanyCardDetail
            isPerc
            offerID={offerID}
            setisDetail={setisDetail}
            handleStudentDetail={handleStudentDetail}
            handleOfferAccepted={handleOfferAccepted}
            handleOfferRejected={handleOfferRejected}
            isnext={isnext}
            setIsNext={setIsNext}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        {studentFormData && studentFormData.user ? (
          <Tabs activeKey={key2} id="first" className="OverviewOfOffers upper-nav custom-tabs" onSelect={(k) => setKey2(k)}>
            <Tab eventKey="first" title="Présentation Générales" className="h-100">
              <div className="AnnoncesViewOffersBox">
                <div className="genProfileBox">
                  <div className="genProfile">
                    <Row className="p-3 w-100">
                      <Col lg={3} md={4}>
                        <div className="profileImage">
                          <Image
                            alt="iamge2"
                            src={
                              studentFormData.professional_Picture.image
                                ? `${baseUri}/${studentFormData.professional_Picture.image}`
                                : DEFAULT_IMAGE
                            }
                          />
                        </div>
                        <div className="profileImage">
                          <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                              hidden={studentFormData.presentation_Video.video ? false : true}
                              className="embed-responsive-item"
                              // src={`../images/video.mp4`}
                              src={
                                `${baseUri}/views/uploads/${studentFormData.presentation_Video.video}`
                                  ? `${baseUri}/views/uploads/${studentFormData.presentation_Video.video}`
                                  : `../images/video.mp4`
                              }
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </Col>
                      <Col lg={9} md={8}>
                        <div className="profilename">
                          {studentFormData?.user?.firstName} {studentFormData?.user?.lastName}
                        </div>
                        <div className="profileProfession">{studentFormData?.user?.type}</div>
                        <div className="generalDescription">Description générale</div>
                        <div className="description">
                          {studentFormData?.general_Presentation ? studentFormData?.general_Presentation : ""}
                        </div>
                        <div className="professionalNetwork">Réseau pro</div>
                        <ul className="PLinks">
                          <li>
                            <Image src={Linkedin} />
                          </li>
                          <li>Linkedin &nbsp;&nbsp;: </li>
                          <li>
                            <a href={`${studentFormData?.professional_networks?.linkedIn}`} target="_blank">
                              {studentFormData.professional_networks?.linkedIn
                                ? studentFormData.professional_networks?.linkedIn
                                : ""}
                            </a>
                          </li>
                        </ul>
                        <ul className="PLinks">
                          <li>
                            <Image src={Behance} />
                          </li>
                          <li>Behance &nbsp;&nbsp;: </li>
                          <li>
                            <a href={`${studentFormData?.professional_networks?.Behance}`} target="_blank">
                              {studentFormData?.professional_networks?.Behance
                                ? studentFormData?.professional_networks?.Behance
                                : ""}
                            </a>
                          </li>
                        </ul>
                        <ul className="PLinks">
                          <li>
                            <Image src={Dribble} />
                          </li>
                          <li>Dribble &nbsp;&nbsp;: </li>
                          <li>
                            <a href={`${studentFormData?.professional_networks?.Dribble}`} target="_blank">
                              {studentFormData?.professional_networks?.Dribble
                                ? studentFormData?.professional_networks?.Dribble
                                : ""}
                            </a>
                          </li>
                        </ul>
                        <ul className="PLinks">
                          <li>
                            <Image src="../images/github.png" />
                          </li>
                          <li>Github &nbsp;&nbsp;: </li>
                          <li>
                            <a href={`${studentFormData?.professional_networks?.Github}`} target="_blank">
                              {studentFormData?.professional_networks?.Github
                                ? studentFormData?.professional_networks?.Github
                                : ""}
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="second" title="Formation / École" className="h-100">
              <div className="AnnoncesViewOffersBox">
                <div className="offers custom-box">
                  {studentFormData.education && studentFormData.education.length > 0 ? (
                    studentFormData.education.map((card, index) => (
                      <InfoCard item={card} key={index} cindex={index} type="EDUCATION" EditPermission="false" />
                    ))
                  ) : (
                    <h1 className="text-center">Ajoutez une formation</h1>
                  )}
                </div>
              </div>
            </Tab>
            <Tab eventKey="third" title="CV en ligne" className="h-100">
              <div className="AnnoncesViewOffersBox">
                {studentFormData?.professional_profile && studentFormData?.professional_profile?.length > 0 ? (
                  <CVEngine USER={studentFormData} type="student_professional_info" />
                ) : (
                  <h1 className="text-center">Ajoutez une expérience professionnelle</h1>
                )}
              </div>
            </Tab>
            <Tab
              eventKey="fourth"
              title="Retour"
              className="h-100"
              onEntering={() => {
                setstudentDetail(false);
                setIsNext(true);
                setisDetail(false);
                setKey2("first");
              }}
            ></Tab>
          </Tabs>
        ) : (
          <h1 className="text-center">Aucune donnée disponible</h1>
        )}
      </>
    );
  }
};
export default OverviewOfOffers;

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
];

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
];

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
];

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
    calender: true,
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
