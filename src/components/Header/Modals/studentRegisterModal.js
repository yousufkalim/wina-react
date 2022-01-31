import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ModalInput from "../../UI/Input";
import LeftSidebar from "./Components/leftSideBar";
import { useFormik } from "formik";
import {
  SIGNUP_STATE,
  LOGIN_STATE,
} from "../../../Globals/InitialValues/Student";
import { SIGNUP_YUP, LOGIN_YUP } from "../../Formik/Student/yupValidation";
import { Student_Signup, login, getApiAdress } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import AutoComplete from "../../UI/AutoComplete2";
import { TextField, Checkbox, Paper } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Texts from "../../../Globals/Texts";

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

    // '& .MuiFormLabel-root.Mui-focused': {
    //   color: "#2879d9"
    // },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #f7c40d",
    },
    "& .MuiAutocomplete-inputRoot": {
      // borderBottom: "1px solid #f7c40d",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink",
        // - Set the Input border
      },
      // "&:hover": {
      //   borderColor: "#2879d9", // - Set the Input border when parent has :hover
      // },
      // "&.Mui-focused fieldset": {
      //   // - Set the Input border when parent is focused
      //   borderColor: "#2879d9",
      // },
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

  root2: {
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

    // '& .MuiFormLabel-root.Mui-focused': {
    //   color: "#2879d9"
    // },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #f7c40d",
    },
    "& .MuiAutocomplete-inputRoot": {
      // borderBottom: "1px solid #f7c40d",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink",
        // - Set the Input border
      },
      // "&:hover": {
      //   borderColor: "#2879d9", // - Set the Input border when parent has :hover
      // },
      // "&.Mui-focused fieldset": {
      //   // - Set the Input border when parent is focused
      //   borderColor: "#2879d9",
      // },
    },
    "& .MuiFormLabel-root.Mui-focused": {
      display: "none",
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.12rem",
      "& .Mui-focused": {
        color: "#fff",
      },
    },
    "& .MuiInputLabel-shrink ": {
      display: "none",
    },

    "& .MuiInputBase-root ": {
      fontSize: "1.12rem",
    },
  },
});

export default function StudentRegister(props) {
  const classes = useStyle();
  // Dispatch
  const dispatch = useDispatch();
  const store = useSelector((state) => state.student);
  const store2 = useSelector((state) => state.globals);
  const [address, setAddress] = useState("");

  //states
  const [items, setItems] = useState([]);

  // end

  // formik
  const formik = useFormik({
    initialValues: SIGNUP_STATE,
    validationSchema: SIGNUP_YUP,
    onSubmit: (values) => {
      let response = dispatch(Student_Signup(values));

      response.then((value) => {
        if (value === true) {
          formik.setSubmitting(false);
          formik.handleReset();
          setAddress("");
        } else {
          props.handleModal("student");
        }
      });
    },
  });

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (value.length <= 10) {
        formik.setFieldValue(name, value.replace(/\D/g, ""));
      }
    } else {
      formik.setFieldValue(name, value);
    }
  };

  const handleAddressChange = (value) => {
    setAddress(value);

    dispatch(getApiAdress(value));
    if (store2.items.length > 0) {
      setItems(
        store2.items.map((item) => {
          return {
            id: item.properties.id,
            name: item.properties.label,
            city: item.properties.city,
            postalCode: item.properties.postcode,
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
          };
        })
      );
    }
  };
  const onSubmitAddress = (value) => {
    formik.setFieldValue("address", {
      city: value.city,
      street: "Street",
      zip: value.PostalCode ? value.PostalCode : "40180",
      longitude: value.lng,
      latitude: value.lat,
    });
  };

  // initialize States
  const [formData, setFormData] = useState({
    address: "",
  });
  // state for address details
  const [addressValue, setAddressValue] = useState({
    lat: "",
    lng: "",
    city: "",
    postal_code: "",
    label: "",
    label2: "",
  });
  const [values, setValues] = useState([]);
  // Get All Address in drop down List from API
  const getAllAdress = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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
          formik.setFieldValue("address", {
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
  return (
    <Modal
      className="student-modal"
      show={props.show}
      centered
      onHide={() => props.handleModal("student")}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between p-3">
          <LeftSidebar
            ModalInput={ModalInput}
            dispatch={dispatch}
            useFormik={useFormik}
            LOGIN_STATE={LOGIN_STATE}
            LOGIN_YUP={LOGIN_YUP}
            login={login}
            useSelector={useSelector}
            handleModal={props.handleModal}
          />
          <div className="modal-right-side">
            <div className="Register">
              <div className="heading pb-5">S’inscrire</div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <ModalInput
                    name="firstName"
                    placeholder="Prénom"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    type="text"
                    require={true}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="formikError">{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder="Nom"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    type="text"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="formikError">{formik.errors.lastName}</div>
                  ) : null}
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder="Adresse mail"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="formikError">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder={Texts.ENTER_PASSWORD}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="formikError">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder={Texts.ENTER_CONFIRM_PASSWORD}
                    type="password"
                    name="confirm_password"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirm_password}
                  />
                  {formik.touched.confirm_password &&
                  formik.errors.confirm_password ? (
                    <div className="formikError">
                      {formik.errors.confirm_password}
                    </div>
                  ) : null}
                </div>
                <div className="mt-4">
                  <ModalInput
                    placeholder="Numéro de téléphone"
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="formikError">{formik.errors.phone}</div>
                  ) : null}
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
                    // hiddenLabel="true"
                    // style={{
                    //   width: "91%",
                    //   margin: "auto",
                    // }}
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

                  {/* <AutoComplete
                    formik={formik}
                    onChange={handleAddressChange}
                    placeholder={Texts.userProfile}
                    items={items}
                    studentModal
                    standard="standard"
                    placeholder="Adresse"
                    name={"address"}
                    address={address}
                    loading={store2.loading}
                    onSubmit={onSubmitAddress}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="formikErrorAuto">
                      {" "}
                      {formik.errors.address.city}
                    </div>
                  ) : null} */}
                </div>
                <button
                  className="modal-button modal-register-btn"
                  type="submit"
                  disabled={store.loading}
                >
                  {store.loading ? "Loading..." : "S’inscrire"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
