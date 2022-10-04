import React, {
  // useState,
  useEffect
} from "react";
import { ReactComponent as Location } from "../../../../assets/10-location.svg";
import { Button, makeStyles } from "@material-ui/core";
// import Slider from "@material-ui/core/Slider";
// import Input from "@material-ui/core/Input";
// import InputAdornment from "@material-ui/core/InputAdornment";
import CardItem from "../../../../components/UI/CardWithImage/OfferCardItem";
import { DEFAULT_IMAGE } from "../../../../Globals";
import { baseUri } from "../../../../urlConfig";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { Get_Job, Cancel_Offer_Decion_By_Students, Offer_Decion_By_Students } from "../../../../Redux/actions";
import Loader from "../../../../components/UI/Loader";

const OfferCardDetail = (props) => {
  const { offerID, setisDetail } = props;



  const dispatch = useDispatch();
  const store = useSelector((state) => state.student);
  const JOB = store.job && store.job;
  const classes = useStyles();

  // state
  // const [value, setValue] = useState(30);

  useEffect(() => {
    if (offerID) dispatch(Get_Job(offerID));
  }, [offerID]);

  // const handleSliderChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleCancelRequest = (id) => {
    dispatch(Cancel_Offer_Decion_By_Students(id, setisDetail));
  };
  // const handleInputChange = (event) => {
  //   setValue(event.target.value === "" ? "" : Number(event.target.value));
  // };
  // const marks = [
  //   {
  //     value: 0,
  //     label: "0€",
  //   },
  //   {
  //     value: 10000,
  //     label: "10 000€",
  //   },
  // ];
  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };




  // offers functions
  const handleOfferAccepted = (id, decision, company) => {
    dispatch(Offer_Decion_By_Students(id, decision, setisDetail, company));
  };
  const handleOfferRejected = (id, decision, company) => {
    dispatch(Offer_Decion_By_Students(id, decision, setisDetail, company));
  };
  if (JOB && Object.keys(JOB).length > 0) {
    if (props.type && props.type === "student") {
      return (
        <>
          <div className="d-flex justify-content-start align-items-center" style={{ height: "10%" }}>
            <span className="offer-apply-btn" onClick={() => setisDetail(false)} style={{ cursor: "pointer" }}>
              <ArrowBackIosIcon
                style={{
                  fontSize: "18",
                  justifyContent: "flex-start",
                }}
              />

              {JOB.company && JOB.company.name}
            </span>
            <span onClick={() => handleCancelRequest(JOB._id)} className="offer-apply-btn offer-apply-btn-red ml-4">
              Se desinteressers
            </span>
          </div>
          <div className="offer-detail">
            <div className="offer-detail-container">
              {JOB.score && JOB.score * 100 > 0 ? (
                <div className="student-offer-detail-percentage">
                  {Math.floor(JOB.score * 100) > 100 ? "98" : Math.floor(JOB.score * 100)}%
                </div>
              ) : (
                ""
              )}
              <div className="offer-detail-header">
                <div className="offer-detail-header-image text-left">
                  <img
                    src={JOB.photo.image ? `${baseUri}/${JOB.photo.image}` : DEFAULT_IMAGE}
                    alt=""
                    // style={{ width: "500px", height: "280px" }}
                  />
                </div>
                {/* <div className="offer-detail-line"></div> */}
                <div className="offer-detail-header-text text-left offer-detail-header-line">
                  {JOB.company && JOB.company.name}
                </div>
              </div>

              <div className="offer-detail-date-container">
                <div className="offer-detail-location text-left">
                  <span>
                    <Location className="offer-detail-location-icon" />
                  </span>{" "}
                  {JOB.location.street},{JOB.location.zip} {JOB.location.city}
                </div>
              </div>

              <div className="offer-detail-content01">
                <CardItem
                  className="offer-card-item-bordered offer-detail-content-detail"
                  content={JOB.domain}
                  title="Domaine : "
                />
                <CardItem
                  className="offer-card-item-bordered offer-detail-content-detail"
                  content={JOB.levelOfEducation}
                  title="Niveau d’étude : "
                />
              </div>

              <div className="offer-detail-date-headings">
                <div className="offer-detail-date-heading text-left">Date de début</div>
                <div className="offer-detail-date-heading text-left">Durée</div>
              </div>
              <div className="offer-detail-date-container">
                <CardItem className="offer-card-item-bordered offer-detail-date" content={JOB.startDate} />
                <CardItem className="offer-card-item-bordered offer-detail-date" content={JOB.duration} />
              </div>

              <div className="offer-detail-date-container">
                <CardItem className="offer-card-item-bordered offer-detail-skills-heading" content="Compétences générales " />
              </div>

              <div className="offer-detail-date-container">
                {JOB.softSkills && JOB.softSkills.length > 0 ? (
                  JOB.softSkills.map((sf) => <CardItem className="offer-detail-skills" content={sf.skillField} />)
                ) : (
                  <p>No Compétences générales found</p>
                )}
              </div>

              <div className="offer-detail-date-container">
                <CardItem className="offer-card-item-bordered offer-detail-skills-heading" content="Compétences spécialisées " />
              </div>

              <div className="offer-detail-date-container">
                {JOB.hardSkills && JOB.hardSkills.length > 0 ? (
                  JOB.hardSkills.map((sf) => <CardItem className="offer-detail-skills" content={sf.skillField} />)
                ) : (
                  <p>No Compétences spécialisées found</p>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="d-flex justify-content-start align-items-center" style={{ height: "10%" }}>
            <span
              className="offer-apply-btn "
              onClick={() => setisDetail(false)}
              style={{
                cursor: "pointer",
              }}
            >
              <ArrowBackIosIcon
                style={{
                  fontSize: "18",
                  justifyContent: "flex-start",
                }}
              />

              {JOB.company && JOB.company.name}
            </span>
          </div>
          <div className="offer-detail">
            <div className="offer-detail-container">
              {JOB.score && JOB.score * 100 > 0 ? (
                <div className="student-offer-detail-percentage">
                  {Math.floor(JOB.score * 100) > 100 ? "98" : Math.floor(JOB.score * 100)}%
                </div>
              ) : (
                ""
              )}
              <div className="offer-detail-header">
                {/* <div className="offer-detail-header-image text-right">
                  <img
                    src={JOB.photo.image ? `${baseUri}/${JOB.photo.image}` : DEFAULT_IMAGE}
                    alt=""
                    style={{ width: "500px", height: "280px" }}
                  />
                </div> */}
                {/* <div className="offer-detail-line"></div> */}
                <div className="offer-detail-header-text  offer-detail-header-line">{JOB.company && JOB.company.name}</div>
              </div>

              <div className="offer-detail-date-container">
                <div className="offer-detail-location">
                  <span style={{ color: "#02196A" }}>
                    <Location className="offer-detail-location-icon" /> {JOB.location.street}-{JOB.location.zip}{" "}
                    {JOB.location.city}
                  </span>
                </div>
              </div>

              <div className="offer-detail-content" style={{ color: "#2E7BD6", marginTop: "2rem" }}>
                <CardItem
                  className="offer-card-item-bordered offer-detail-content-detail"
                  content={JOB.domain}
                  title="Domaine : "
                />
                <CardItem
                  className="offer-card-item-bordered offer-detail-content-detail"
                  content={JOB.levelOfEducation}
                  title="Niveau d’étude : "
                />
              </div>

              <div className="offer-detail-date-headings">
                <div className="offer-detail-date-heading ">Date de début</div>
                <div className="offer-detail-date-heading">Durée</div>
              </div>
              <div className="offer-detail-date-container">
                <CardItem className="offer-card-item-bordered offer-detail-date" content={JOB.startDate} />
                <CardItem className="offer-card-item-bordered offer-detail-date" content={JOB.duration} />
              </div>

              <div className="offer-detail-date-container-2" style={{ marginTop: "2rem", color: "#2E7BD6" }}>
                <CardItem className="offer-card-item-bordered offer-detail-skills-heading" content="Compétences générales " />
              </div>

              <div className="offer-detail-date-container mb-2">
                {JOB.softSkills && JOB.softSkills.length > 0 ? (
                  JOB.softSkills.map((sf) => <CardItem className="offer-detail-skills" content={sf.skillField} />)
                ) : (
                  <p>No Compétences générales found</p>
                )}
              </div>

              <div className="offer-detail-date-container-2" style={{ marginTop: "2rem" }}>
                <CardItem className="offer-card-item-bordered offer-detail-skills-heading" content="Compétences spécialisées " />
              </div>

              <div className="offer-detail-date-container mb-2">
                {JOB.hardSkills && JOB.hardSkills.length > 0 ? (
                  JOB.hardSkills.map((sf) => <CardItem className="offer-detail-skills" content={sf.skillField} />)
                ) : (
                  <p>No Compétences spécialisées found</p>
                )}
              </div>

              <div className="offer-detail-buttons-container " style={{ justifyContent: "center" }}>
                <Button
                  onClick={() => handleOfferAccepted(JOB._id, "requested", JOB.company.contactPerson.person)}
                  classes={{
                    root: classes.root1, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                >
                  Candidater
                </Button>
                <Button
                  onClick={() => handleOfferRejected(JOB._id, "rejected", JOB.company.contactPerson.person)}
                  classes={{
                    root: classes.root2, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                >
                  Refuser
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <Loader.CenterProgress size={80} />;
  }
};

export default OfferCardDetail;
const useStyles = makeStyles({
  root: {
    width: "15.6rem",
  },
  input: {
    width: "5.4rem",
    paddingLeft: 9,
    position: "absolute",
    marginLeft: "6.2rem",
  },
  root1: {
    backgroundColor: "#2B5AA6",
    borderRadius: "5px",
    border: 0,
    fontSize: "1.37rem",
    color: "white",
    height: "3.7rem",
    padding: "0 3.7rem",
    boxShadow: "0px 13px 18px rgba(0, 35, 91, 0.15)",
  },
  root2: {
    "&:focus": {
      border: "none",
      outline: "none",
    },
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid #2B5AA6",
    fontSize: "1.37rem",
    color: "#2B5AA6",
    height: "3.7rem",
    padding: "0 3.7rem",
    boxShadow: "0px 13px 18px rgba(0, 35, 91, 0.15)",
  },

  label: {
    textTransform: "capitalize",
  },
});
