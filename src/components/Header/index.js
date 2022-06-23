import React, { useState, useEffect } from "react";
import MainModal from "./Modals/mainModal";
import StudentRegister from "./Modals/studentRegisterModal";
import LoginModal from "./Modals/Login";
import CompanyRegister from "./Modals/companyRegisterModal";
import RequestForgotPasswordModal from "./Modals/requestModal";
import ResetPasswordModal from "./Modals/resetModal";
import EmailVerificationModal from "./Modals/emailVerificationModal";
import { Image, Accordion, Card, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { getUser } from "../../Redux/actions";
import { TextField, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import * as Notistack from "../../Redux/actions/notistack";
import { useDispatch, useSelector } from "react-redux";

import HomeHeader1 from "./header";
import HomeHeader2 from "./header2";
import ModalInput from "../UI/Input";
/**
 * @author
 * @function Header
 **/

const queryParams = new URLSearchParams(window.location.search);
const SignupByGoogle = queryParams.get("SignupByGoogle");
const SignupBylinkedIn = queryParams.get("SignupBylinkedIn");
const token = queryParams.get("user");

const useStyle = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "3.5rem",
      borderColor: "#2879d9",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2879d9",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #f7c40d",
    },

    "& .MuiAutocomplete-popupIndicator": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #f7c40d",
    },

    "& .MuiFormLabel-root": {
      fontSize: "1.375rem",
      "& .Mui-focused": {
        color: "#fff",
      },
    },

    "& .MuiInputBase-root ": {
      fontSize: "1.375rem",
    },
  },
});

const Header = (props) => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [studentModal, setstudentModal] = useState(false);
  const [companyModal, setcompanyModal] = useState(false);
  const [studentModal2, setstudentModal2] = useState(false); // for modals after google/facebook signup
  const [companyModal2, setcompanyModal2] = useState(false);
  const [mainModal, setmainModal] = useState(false);
  const [requestModal, setrequestModal] = useState(false);
  const [resetModal, setresetModal] = useState(false);
  const [emailVerifyModal, setemailVerifyModal] = useState(false);
  const [data, setData] = useState({});
  const [googleSignupModal, setGoogleSignupModal] = useState(false);
  const [linkedInSignupModal, setLinkedInSignupModal] = useState(false);
  const [user, setUser] = useState(false);
  const [disable, setDisable] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [addressValue, setAddressValue] = useState({
    lat: "",
    lng: "",
    city: "",
    postal_code: "",
    label: "",
    label2: "",
  });
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (SignupByGoogle) {
      setGoogleSignupModal(true);
      var config = {
        method: "get",
        url: process.env.REACT_APP_URL + `/auth/verify-user`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      axios(config)
        .then(function (response) {
          setUser(response.data.user);
        })
        .catch(function (error) {
          console.log(error);
        });
      history.push("/");
    } else if (SignupBylinkedIn) {
      setLinkedInSignupModal(true);
      var config = {
        method: "get",
        url: process.env.REACT_APP_URL + `/auth/verify-user`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      axios(config)
        .then(function (response) {
          setUser(response.data.user);
        })
        .catch(function (error) {
          console.log(error);
        });
      history.push("/");
    }

    if (props.id) {
      setresetModal(!resetModal);
    } else if (props.token) {
      setemailVerifyModal(!emailVerifyModal);
    }
  }, []);

  const handleModal = (name) => {
    if (name === "login") {
      setLogin(!login);
      setstudentModal(false);
      setmainModal(false);
      setcompanyModal(false);
    } else if (name === "student") {
      setstudentModal(!studentModal);
      setLogin(false);
      setmainModal(false);
      setcompanyModal(false);
    } else if (name === "company") {
      setcompanyModal(!companyModal);
      setLogin(false);
      setstudentModal(false);
      setmainModal(false);
    } else if (name === "main") {
      setmainModal(!mainModal);
      setLogin(false);
      setcompanyModal(false);
      setstudentModal(false);
    } else if (name === "reqforgotPassword") {
      setrequestModal(!requestModal);
      setLogin(false);
      setmainModal(false);
      setcompanyModal(false);
      setstudentModal(false);
    } else if (name === "emailVerify") {
      setemailVerifyModal(!emailVerifyModal);
      setLogin(false);
      setresetModal(false);
      setrequestModal(false);
      setmainModal(false);
      setcompanyModal(false);
      setstudentModal(false);
    } else if (name === "student2") {
      setType("student");
      setstudentModal2(!studentModal);
      setLogin(false);
      setGoogleSignupModal(false);
      setLinkedInSignupModal(false);
      setcompanyModal2(false);
    } else if (name === "company2") {
      setType("company");
      setcompanyModal2(!companyModal);
      setLogin(false);
      setstudentModal2(false);
      setGoogleSignupModal(false);
      setLinkedInSignupModal(false);
    } else {
      setresetModal(!resetModal);
      setLogin(false);
      setrequestModal(false);
      setmainModal(false);
      setcompanyModal(false);
      setstudentModal(false);
    }
  };

  const getUser = async () => {
    if (props.id) {
      let DATA = await axios.get(
        `${process.env.REACT_APP_URL}/profile/getUser/${props.id}`
      );
      setData(DATA.data);
      setresetModal(!resetModal);
    } else if (props.token) {
      setemailVerifyModal(!emailVerifyModal);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // Get All Address in drop down List from API
  const getAllAdress = async (e) => {
    delete axios.defaults.headers.common["x-auth-token"];

    let res = await axios.get(
      "https://api-adresse.data.gouv.fr/search/?q=" +
        e.target.value +
        "&type=housenumber&autocomplete=1",
      {
        withCredentials: false,
      }
    );

    if (localStorage.token) {
      axios.defaults.headers.common["x-auth-token"] = localStorage.token;
    }

    var addressToSet = []; // //debugger;
    for (var i = 0; i < res?.data?.features?.length; i++) {
      addressToSet.push({
        id: i,
        label: res?.data?.features[i].properties.label,
        label2: `${
          res?.data?.features[i].properties.label +
          "," +
          res?.data?.features[i].properties.context
        }`,
        city: res?.data?.features[i].properties.city,
        PostalCode: res?.data?.features[i].properties.postcode,
        lat: res?.data?.features[i].geometry.coordinates[1],
        lng: res?.data?.features[i].geometry.coordinates[0],
      });
    }
    if (addressToSet.length === res?.data?.features.length) {
      setValues(addressToSet);
    }
  };
  // Set Address in  setAddressValue State
  const SetAddress = async (item) => {
    if (item.target.textContent) {
      const selectedItem = item.target.textContent;
      for (var i = 0; i < values.length; i++) {
        if (values[i].label2 === selectedItem) {
          var postal_code = values[i].PostalCode;
          var lat = values[i].lat;
          var lng = values[i].lng;
          const city = values[i].city;
          await setAddressValue({
            ...addressValue,
            label: values[i].label,
            label2: values[i].label2,
            postal_code,
            lat,
            lng,
            city,
          });
          setAddress({
            city: city,
            street: "Street",
            zip: postal_code ? postal_code : "40180",
            longitude: lng,
            latitude: lat,
          });
        }
      }
    } else {
      await setAddressValue({
        ...addressValue,
        address: "",
        zip_code: "",
        lat: "",
        long: "",
        city: "",
      });
    }
  };

  const handleClick = async (e) => {
    setDisable(true);
    if (address === "") {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar("L'adresse ne peut pas être vide", "warning")
        )
      );
      setDisable(false);
    } else if (phone === "") {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar("Le téléphone ne peut pas être vide", "warning")
        )
      );
      setDisable(false);
    } else {
      if (SignupByGoogle) {
        axios
          .post(process.env.REACT_APP_URL + `/auth/google-register`, {
            address: address,
            phone: phone,
            type: type,
            userId: user._id,
          })
          .then(function (response) {
            if (response.data.user.status === "active") {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              window.location.reload();
            }
            dispatch(
              Notistack.enqueueSnackbar(
                Notistack.snackBar(
                  "Inscription réussie ! Essayez de vous reconnecter",
                  "success"
                )
              )
            );
          })
          .catch(function (error) {
            console.log(error);
            setDisable(false);
          });
      } else {
        axios
          .post(process.env.REACT_APP_URL + `/auth/linkedIn-register`, {
            address: address,
            phone: phone,
            type: type,
            userId: user._id,
          })
          .then(function (response) {
            if (response.data.user.status === "active") {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              window.location.reload();
            }
            dispatch(
              Notistack.enqueueSnackbar(
                Notistack.snackBar(
                  "Inscription réussie ! Essayez de vous reconnecter",
                  "success"
                )
              )
            );
          })
          .catch(function (error) {
            console.log(error);
            setDisable(false);
          });
      }
    }
  };

  const handleModalClose = () => {
    setGoogleSignupModal(false);
    setLinkedInSignupModal(false);
  };

  return (
    <>
      <MainModal show={mainModal} handleModal={handleModal} />
      <LoginModal show={login} handleModal={handleModal} />
      <StudentRegister show={studentModal} handleModal={handleModal} />
      <CompanyRegister show={companyModal} handleModal={handleModal} />
      <RequestForgotPasswordModal
        show={requestModal}
        handleModal={handleModal}
      />
      <ResetPasswordModal
        show={resetModal}
        handleModal={handleModal}
        id={props.id}
        data={data}
      />
      <EmailVerificationModal
        show={emailVerifyModal}
        handleModal={handleModal}
        id={props.token}
      />
      <Modal
        className="student-modal"
        show={googleSignupModal || linkedInSignupModal}
        centered
        onHide={() => handleModalClose()}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="Register">
            <div className="heading pb-5">Continuer l'inscription</div>
            <div className="modal-sub-heading ">ÉTUDIANT</div>
            <div className="studentRegisterbtn">
              <div
                className="modal-button"
                onClick={() => handleModal("student2")}
              >
                S’inscrire
              </div>
            </div>
            <div className="modal-sub-heading">ENTREPRISE</div>
            <div className="BUSINESSRegisterbtn">
              <div
                className="modal-button"
                onClick={() => handleModal("company2")}
              >
                Société
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        className="student-modal"
        show={studentModal2}
        centered
        onHide={() => setstudentModal2(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="Register">
            <div className="heading pb-5">
              Continuer l'inscription des étudiants
            </div>
            <div className="" style={{ marginTop: "-30px" }}>
              <Autocomplete
                options={values}
                clearOnEscape={true}
                // disableClearable
                className={classes.root}
                noOptionsText={
                  <div style={{ color: "black", fontSize: "12px" }}>
                    {" "}
                    aucune option{" "}
                  </div>
                }
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "" }}>{children}</Paper>
                )}
                getOptionLabel={(option) => option.label2 || ""}
                onChange={SetAddress}
                renderInput={(params) => (
                  <TextField
                    InputProps={{ ...params.InputProps, type: "text" }}
                    className={classes.root}
                    {...params}
                    margin="normal"
                    // onBlur={onBlur}
                    variant={"standard"}
                    placeholder="Adresse"
                    style={{ color: "white" }}
                    onChange={getAllAdress}
                    name="address"
                    // value={address}
                  />
                )}
              />
            </div>
            <div className="mt-4">
              <ModalInput
                placeholder="Numéro de téléphone"
                type="number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <button
              className="modal-button"
              onClick={() => handleClick()}
              disabled={disable}
            >
              S’inscrire
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        className="student-modal"
        show={companyModal2}
        centered
        onHide={() => setcompanyModal2(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="Register">
            <div className="heading pb-5">
              Continuez enregistrement de la Entreprise
            </div>
            <div className="mt-4">
              <ModalInput
                placeholder="Numéro de téléphone"
                type="number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <button
              className="modal-button"
              onClick={() => handleClick()}
              disabled={disable}
            >
              S’inscrire
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="home_container">
        {props.header === "2" ? (
          <HomeHeader2 handleModal={handleModal} />
        ) : (
          <HomeHeader1 handleModal={handleModal} />
        )}
        {props.header === "2" ? (
          ""
        ) : (
          <div className="homeBackground">
            <div className="homebackground-text">
              <h1>
                BOOSTER DE <br />
                L’APPRENTISSAG
              </h1>
              <p>Faire de l’alternance, la voix de l’excellence</p>
            </div>

            <div className="post_mobile-view_responsive">
              <div
                className="post_mobile-view-content"
                style={{ paddingBottom: "6rem" }}
              >
                <div className="post_icons">
                  <Image src="../images/PostAnOffer.png" alt="Post an offer" />
                  <div className="label">Poster une offre</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/faq.png" alt="Post an offer" />
                  <div className="label">FAQ</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/uploadcv.png" alt="Post an offer" />
                  <div className="label">Télécharger votre CV</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/register.png" alt="Post an offer" />
                  <div className="label">S’inscrire</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/contact_us.png" alt="Post an offer" />
                  <div className="label">Contactez-nous</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/cgv.png" alt="Post an offer" />
                  <div className="label">CGV</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
