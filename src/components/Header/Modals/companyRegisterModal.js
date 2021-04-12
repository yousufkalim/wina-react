import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalInput from "../../UI/Input";
import { Company_Types } from "../../Data";
import LeftSidebar from "./Components/leftSideBar";
import {
  SIGNUP_STATE,
  LOGIN_STATE,
} from "../../../Globals/InitialValues/Company";
import Texts from "../../../Globals/Texts";

import { SIGNUP_YUP, LOGIN_YUP } from "../../Formik/Company/yupValidation";
import { login, getApiAdress } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import AutoComplete from "../../UI/AutoComplete";

const StudentRegister = (props) => {
  // Dispatch
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user);
  const store2 = useSelector((state) => state.globals);

  //states
  const [items, setItems] = useState([]);

  // end

  // formik
  const formik = useFormik({
    initialValues: SIGNUP_STATE,
    validationSchema: SIGNUP_YUP,
    onSubmit: (values, { setSubmitting }) => {
      // dispatch(Company_Signup(values, formik));
      console.log(values, "values");
      setSubmitting(false);
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
      zip: value.PostalCode,
      longitude: value.lng,
      latitude: value.lat,
    });
  };
  return (
    <Modal
      className="student-modal"
      show={props.show}
      centered
      onHide={() => props.handleModal("company")}
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
          />
          <div className="modal-right-side">
            <div className="Register">
              <div className="heading pb-4">S’inscrire - Société</div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <ModalInput
                    placeholder="Nom de l’entreprise"
                    name="name"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type="text"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="formikError">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="my-4">
                  <AutoComplete
                    formik={formik}
                    onChange={handleAddressChange}
                    placeholder={Texts.userProfile}
                    items={items}
                    loading={store2.loading}
                    name={"address"}
                    onSubmit={onSubmitAddress}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="formikErrorAuto">
                      {" "}
                      {formik.errors.address.city}
                    </div>
                  ) : null}
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder="Type d Entreprise"
                    type="select"
                    options={Company_Types}
                    name="type"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.type}
                  />
                  {formik.touched.type && formik.errors.type ? (
                    <div className="formikError">{formik.errors.type}</div>
                  ) : null}
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder="Numéro SIRET"
                    type="text"
                    name="siretNumber"
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.siretNumber}
                  />
                  {formik.touched.siretNumber && formik.errors.siretNumber ? (
                    <div className="formikError">
                      {formik.errors.siretNumber}
                    </div>
                  ) : null}
                </div>

                <div className="my-4">
                  <ModalInput
                    placeholder="Profil Linkedin"
                    type="text"
                    name="linkedIn"
                    onChange={handleChange}
                    value={formik.values.linkedIn}
                  />
                </div>
                <div className="my-4">
                  <ModalInput
                    placeholder="L’entreprise fait-elle partie d’un groupement ? Si oui, préciser le nom"
                    type="text"
                    name="website"
                    onChange={handleChange}
                    value={formik.values.website}
                  />
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
};
export default StudentRegister;
