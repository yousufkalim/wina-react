import React, { useState } from "react";
import { Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

export default function Hard_skilltab(props) {
  const {
    options,
    Select,
    Button,
    store,
    SKILLS_STATE,
    SKILLS_YUP,
    ModalInput,
    DB_Array,
    Add_info_Student,
    SOFT_SKILLS_DB,
    Notistack,
  } = props;
  const dispatch = useDispatch();

  //   ************
  //   ******************************************
  // states

  //
  const formik = useFormik({
    initialValues: SKILLS_STATE,
    validationSchema: SKILLS_YUP,
    onSubmit: (values) => {
      let check = SOFT_SKILLS_DB.some((sa) => sa === values.name);
      if (check === false) {
        let obj = {};
        DB_Array.push(values.name);
        obj.softSkills = DB_Array;
        dispatch(Add_info_Student(obj, formik));
        formik.handleReset();
      } else {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(
              "Le nom de la compétence non technique existait déjà",
              "error"
            )
          )
        );
      }
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };
  return (
    <div className="GeneralSkillsBox">
      <div className="GeneralSkills">
        <div className="GSkillsBox">
          <div className="skills-heading">
            Dites-nous vos compétences générales :
          </div>
          <div className="text-left">
            <div className="skills-heading-line"></div>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-5">
            <div className="col-lg-4 col-md-6 mb-5 mt-2">
              <Select
                name="name"
                value={formik.values.name}
                onChange={handleChange}
                options={options}
                label="Compétences"
                type="skills"
                // other="other"
              />

              {formik.touched.name && formik.errors.name ? (
                <div className="formikErrorAuto mt-2" > {formik.errors.name}</div>
              ) : null}
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
}
