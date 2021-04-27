import React, { useState, useEffect } from "react";
import { Row, Col, Tab, Tabs, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PPModal from "./Modals/addModal";
import EditPPModal from "./Modals/editModal";
import InfoCard from "../../../../../components/UI/InfoCard/InfoCard";
import { useDispatch, useSelector } from "react-redux";
import { Delete_Professional_Info } from "../../../../../Redux/actions";
import _ from "lodash";
import CVENGINE from "./CVEngine";
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

const ProfessionalProfile = () => {
  const store = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const Professional_Profile =
    store.user.student && store.user.student.professional_profile;
  const USER = store.user && store.user;
  const [key, setKey] = useState("Professionalcareer");
  const [show, setShow] = useState(false);
  const [professionalArray, setprofessionalArray] = useState([]);
  const [edit_profile_id, setedit_profile_id] = useState("");
  const [edit_school_show, setedit_school_show] = useState(false);
  const [PDF, setPDF] = useState("");

  const classes = useStyles();
  // useEffect
  useEffect(() => {
    let tempProfessional_Profile = _.cloneDeep(Professional_Profile);
    tempProfessional_Profile.forEach(function (v) {
      delete v._id;
    });
    setprofessionalArray(tempProfessional_Profile);
  }, []);
  const EditProfessionalCareerModal = (id) => {
    if (!edit_profile_id) {
      setedit_profile_id(id);
    }
    setedit_school_show(!edit_school_show);
  };
  const ProfessionalCareerModal = () => {
    setShow(!show);
  };
  // delete professional
  const handleDeleteProfessional = (id) => {
    if (id) {
      dispatch(Delete_Professional_Info(id));
    }
  };
  // handle pdf uploadcv
  const handleFileUpload = (e) => {
    if (e.target.files.length) {
      let file = e.target.files[0];
      if (file.type === "application/pdf") {
        const uri = URL.createObjectURL(file);

        setPDF(uri);
      } else {
        alert("You can upload only pdf ");
      }
    }
  };
  return (
    <>
      <PPModal
        show={show}
        setShow={setShow}
        professionalArray={professionalArray}
      />
      <EditPPModal
        id={edit_profile_id}
        show={edit_school_show}
        setedit_profile_id={setedit_profile_id}
        setShow={setedit_school_show}
        data={Professional_Profile}
        professionalArray={professionalArray}
      />
      <div className="importCV">
        <div className={classes.root}>
          <input
            accept="application/pdf"
            className={classes.input}
            id="contained-button-file"
            onChange={handleFileUpload}
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Importer CV
            </Button>
          </label>
        </div>
      </div>
      <Tabs
        activeKey={key}
        id="Profile"
        className="Profile upper-nav custom-tabs"
        onSelect={(k) => setKey(k)}
      >
        <Tab
          eventKey="Professionalcareer"
          title="Parcours professionnels"
          className="w-100 h-100"
        >
          <div className="ProfessionalcareerBox">
            <div className="Professionalcareer">
              <Image
                className="modal-icon"
                src="../images/add_icons.png"
                onClick={ProfessionalCareerModal}
              />

              {Professional_Profile && Professional_Profile.length > 0 ? (
                Professional_Profile.map((card, index) => (
                  <InfoCard
                    EditProfessionalCareerModal={EditProfessionalCareerModal}
                    onDelete={() => handleDeleteProfessional(card._id)}
                    item={card}
                    key={index}
                    cindex={index}
                    type="PROFESSIONAL"
                  />
                ))
              ) : (
                <h1 className="text-center">No Professional data found</h1>
              )}
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="generalPresentation"
          title="CV en ligne"
          className="h-100"
        >
          <CVENGINE USER={USER} />
        </Tab>
      </Tabs>
    </>
  );
};
export default ProfessionalProfile;
