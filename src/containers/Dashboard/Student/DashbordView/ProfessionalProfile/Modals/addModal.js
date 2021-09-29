import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import ModalInput from "../../../../../../components/UI/TextField";
import Select from "../../../../../../components/UI/Select";
import DatePicker from "../../../../../../components/UI/DatePicker";
import TextArea from "../../../../../../components/UI/Textarea";
import Button from "../../../../../../components/UI/Button";

import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  getApiAdress,
  Add_Image_info_Student,
} from "../../../../../../Redux/actions";
import * as Notistack from "../../../../../../Redux/actions/notistack";
import Input from "../../../../../../components/UI/Input";
import axios from "axios";
import { baseUrl } from "../../../../../../urlConfig";

import { PROFESSIONAL_PROFILE_STATE } from "../../../../../../Globals/InitialValues/Student";
import { PROFESSIONAL_PROFILE_YUP } from "../../../../../../components/Formik/Student/yupValidation";

const PPModal = ({ show, setShow, professionalArray }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.student);
  // const classes = useStyles();
  const [Image, setImage] = useState("");
  const [ImageUri, setImageURI] = useState("");
  const formik = useFormik({
    initialValues: PROFESSIONAL_PROFILE_STATE,
    validationSchema: PROFESSIONAL_PROFILE_YUP,
    onSubmit: async (values) => {
      let check = professionalArray.some((sa) => sa.company === values.company);
      const formdataImage = new FormData();
      formdataImage.append("image", Image);
      const imageData = await axios({
        method: "post",
        url: `${baseUrl}/FileUpload`,
        data: formdataImage,
      });
      let imagePath = imageData.data;
      if (check === false) {
        values.duration = {
          start_date: values.start_date,
          end_date: values.end_date,
        };
        delete values.start_date;
        delete values.end_date;
        values.image = imagePath;
        let array = [...professionalArray, values];
        let form_data = new FormData();
        form_data.append("professional_profile", JSON.stringify(array));
        dispatch(Add_Image_info_Student(form_data));
        setShow(false);
        formik.resetForm();
        setImage("");
        setImageURI("");
      } else {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("le nom de l'entreprise existait déjà", "error")
          )
        );
      }
    },
  });

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      let file = e.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        let uri = URL.createObjectURL(file);
        setImageURI(uri);
        setImage(file);
        formik.setFieldValue("image", file.name);
      } else {
        alert("Vous ne pouvez télécharger que des images");
      }
    } else if (name === "position_hold") {
      formik.setFieldValue(name, e.target.checked);
    } else {
      formik.setFieldValue(name, value);
    }
  };

  return (
    <Modal
      show={show}
      className="custom-modal"
      onHide={() => setShow(false)}
      dialogClassName="ProfessionalCareerModal"
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Parcours professionnels
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex ">
            <div className="col-lg-6 ">
              <ModalInput
                name="position"
                label="Position"
                // className="Job_title"
                placeholder="Intitulé du poste . Ex : Chef de projet"
                value={formik.values.position}
                onChange={handleChange}
                type="text"
              />
              {formik.touched.position && formik.errors.position ? (
                <div className="formikErrorAuto"> {formik.errors.position}</div>
              ) : null}
            </div>
            <div className="col-lg-6  ml-4">
              <Select
                name="type"
                value={formik.values.type}
                onChange={handleChange}
                options={EmployeeTypeOptions}
                label="Type d’emploi"
              />

              {formik.touched.type && formik.errors.type ? (
                <div className="formikErrorAuto"> {formik.errors.type}</div>
              ) : null}
            </div>
          </div>
          <div className="d-flex mt-4 pt-3">
            <div className="col-lg-6 ">
              <Select
                name="company"
                value={formik.values.company}
                onChange={handleChange}
                options={CompanyOptions}
                label="company d’emploi"
              />

              {formik.touched.company && formik.errors.company ? (
                <div className="formikErrorAuto"> {formik.errors.company}</div>
              ) : null}
            </div>
            <div className="col-lg-6  ml-4 ">
              <Select
                name="place"
                value={formik.values.place}
                onChange={handleChange}
                options={CountryOptions}
                label="place d’emploi"
              />

              {formik.touched.place && formik.errors.place ? (
                <div className="formikErrorAuto"> {formik.errors.place}</div>
              ) : null}
            </div>
          </div>
          <div className="d-flex mt-4 pt-3">
            <div className="col-lg-6 ">
              <DatePicker
                name="start_date"
                previous={true}
                label={"Date de début"}
                value={formik.values.start_date}
                onChange={handleChange}
              />
              {formik.touched.start_date && formik.errors.start_date ? (
                <div className="formikErrorAuto">
                  {" "}
                  {formik.errors.start_date}
                </div>
              ) : null}
            </div>
            <div className="col-lg-6  ml-4">
              <DatePicker
                name="end_date"
                label={"Date de fin"}
                previous={true}
                value={formik.values.end_date}
                onChange={handleChange}
              />
              {formik.touched.end_date && formik.errors.end_date ? (
                <div className="formikErrorAuto"> {formik.errors.end_date}</div>
              ) : null}
            </div>
          </div>
          <div className="d-flex mt-4 pt-3">
            <div className="col-lg-6">
              <TextArea
                name="description"
                value={formik.values.description}
                onChange={handleChange}
                rows={3}
                placeholder="Description"
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="formikErrorDesc">
                  {" "}
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="col-lg-6">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.position_hold}
                    onChange={handleChange}
                    name="position_hold"
                    color="primary"
                  />
                }
                label="J’occupe actuellement ce poste"
              />
            </div>
          </div>

          <div className="d-flex ">
            <div className="col-lg-6">
              <label className="inputLabel" for="professional_Picture">
                Ajouter une photo
              </label>
              <br />
              {ImageUri && <img className="imageURI" src={ImageUri} />}
              <Input
                name="image"
                placeholder="professional_Picture"
                onChange={handleChange}
                type="file"
                accept="image/*"
                id="professional_Picture"
              />

              {formik.touched.image && formik.errors.image ? (
                <div className="formikErrorAuto"> {formik.errors.image}</div>
              ) : null}
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 text-right">
              {store.loading ? (
                <Button
                  className="Enregistrer"
                  type="submit"
                  variant="primary"
                  value="Loading...."
                  disabled={store.loading}
                />
              ) : (
                <Button
                  className="Enregistrer"
                  type="submit"
                  variant="primary"
                  value="S’ENREGISTRER"
                  disabled={false}
                />
              )}
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default PPModal;

/* eslint-disable no-use-before-define */

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const EmployeeTypeOptions = [
  { title: "CDI" },
  { title: "Indépendant" },
  { title: "Freelance" },
  { title: "CDD" },
  { title: "Alternance" },
];
const CompanyOptions = [
  { title: "FALCON IT" },
  { title: "NETSOL" },
  { title: "SYSTEM LIMITED" },
  { title: "PROGRAMMERS FORCE" },
  { title: "NEXT BRIDGE" },
];
const CountryOptions = [
  { title: "PAKISTAN" },
  { title: "AMERICA" },
  { title: "BHOTAN" },
  { title: "GERMANY" },
  { title: "ITALY" },
];
