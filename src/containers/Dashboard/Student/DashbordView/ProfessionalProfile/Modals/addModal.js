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
  Add_info_Student,
} from "../../../../../../Redux/actions";
import * as Notistack from "../../../../../../Redux/actions/notistack";

import { PROFESSIONAL_PROFILE_STATE } from "../../../../../../Globals/InitialValues/Student";
import { PROFESSIONAL_PROFILE_YUP } from "../../../../../../components/Formik/Student/yupValidation";

const PPModal = ({ show, setShow, professionalArray }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user);
  // const classes = useStyles();

  const formik = useFormik({
    initialValues: PROFESSIONAL_PROFILE_STATE,
    validationSchema: PROFESSIONAL_PROFILE_YUP,
    onSubmit: (values) => {
      let check = professionalArray.some((sa) => sa.company === values.company);
      if (check === false) {
        let obj = {};
        values.duration = {
          start_date: values.start_date,
          end_date: values.end_date,
        };
        professionalArray.push(values);
        delete values.start_date;
        delete values.end_date;
        obj.professional_profile = professionalArray;

        dispatch(Add_info_Student(obj, formik));
        setShow(false);
      } else {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("company name already existed", "error")
          )
        );
      }
    },
  });
  // const handleFileUpload = (e) => {
  //   if (e.target.files.length) {
  //     let file = e.target.files[0];
  //     if (file.type !== "application/pdf") {
  //       let form_data = new FormData();
  //       form_data.append("school_image", file);
  //       dispatch(Add_Image_info_Student(form_data));

  //       const uri = URL.createObjectURL(file);

  //       setPDF(uri);
  //     } else {
  //       alert("You can upload only images ");
  //     }
  //   }
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    formik.setFieldValue(name, value);
  };

  return (
    <Modal
      show={show}
      className="custom-modal-big"
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
          <div className="professional-modal-first">
            {/* <Form.Control
              type="text"
              placeholder="Intitulé du poste . Ex : Chef de projet"
              className="Job_title"
            /> */}
            <div>
              <ModalInput
                name="position"
                label="Position"
                // className="Job_title"
                placeholder="Intitulé du poste . Ex : Chef de projet"
                value={formik.position}
                onChange={handleChange}
                type="text"
              />
              {formik.touched.position && formik.errors.position ? (
                <div className="formikErrorAuto"> {formik.errors.position}</div>
              ) : null}
            </div>
            <div>
              <Select
                name="type"
                value={formik.type}
                onChange={handleChange}
                options={EmployeeTypeOptions}
                label="Type d’emploi"
              />

              {formik.touched.type && formik.errors.type ? (
                <div className="formikErrorAuto"> {formik.errors.type}</div>
              ) : null}
            </div>

            <div>
              <Select
                name="company"
                value={formik.company}
                onChange={handleChange}
                options={CompanyOptions}
                label="company d’emploi"
              />

              {formik.touched.company && formik.errors.company ? (
                <div className="formikErrorAuto"> {formik.errors.company}</div>
              ) : null}
            </div>

            <div>
              <Select
                name="place"
                value={formik.place}
                onChange={handleChange}
                options={CountryOptions}
                label="place d’emploi"
              />

              {formik.touched.place && formik.errors.place ? (
                <div className="formikErrorAuto"> {formik.errors.place}</div>
              ) : null}
            </div>
          </div>
          <div className="startEndDateRow professional-modal-second">
            <div className="position">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.position_hold}
                    onChange={handleChange}
                    name="position_hold"
                    color="primary"
                  />
                }
                label="J’occupe actuellement ce poste"
              />
            </div>

            <div className="DateRow ">
              <div>
                <DatePicker
                  name="start_date"
                  label={"Date de fin"}
                  value={formik.start_date}
                  onChange={handleChange}
                />
                {formik.touched.start_date && formik.errors.start_date ? (
                  <div className="formikErrorAuto">
                    {" "}
                    {formik.errors.start_date}
                  </div>
                ) : null}
              </div>
              <div>
                <DatePicker
                  name="end_date"
                  label={"Date de fin"}
                  value={formik.end_date}
                  onChange={handleChange}
                />
                {formik.touched.end_date && formik.errors.end_date ? (
                  <div className="formikErrorAuto">
                    {" "}
                    {formik.errors.end_date}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="description">
            <TextArea
              name="description"
              value={formik.description}
              onChange={handleChange}
              rows={3}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="formikErrorDesc">
                {" "}
                {formik.errors.description}
              </div>
            ) : null}
          </div>

          {/* <div className="text-right"> */}
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
              value="Enregistrer"
              disabled={false}
            />
          )}
          {/* </div> */}
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
