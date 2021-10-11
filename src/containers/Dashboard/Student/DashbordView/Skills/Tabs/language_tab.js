import React from "react";
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
    options2,
    DB_Array,
    Add_info_Student,
    LANGUAGES_DB,
    Notistack,
  } = props;
  const dispatch = useDispatch();

  //   ************
  //   ******************************************
  const formik = useFormik({
    initialValues: SKILLS_STATE,
    validationSchema: SKILLS_YUP,
    onSubmit: (values) => {
      let check = LANGUAGES_DB.some((sa) => sa.name === values.name);
      if (check === false) {
        let obj = {};
        DB_Array.push(values);
        obj.languages = DB_Array;
        dispatch(Add_info_Student(obj, formik));
        formik.handleReset();
      } else {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("Le nom de la langue existait déjà", "error")
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
            <div className="d-flex mt-2 mb-5">
              <div className="col-lg-4 col-md-6 ">
                <Select
                  name="name"
                  value={formik.values.name}
                  onChange={handleChange}
                  options={options}
                  label="Langue"
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="formikErrorAuto mt-2"> {formik.errors.name}</div>
                ) : null}
              </div>
              <div className="col-lg-4 col-md-6 ml-3">
                <Select
                  name="skill"
                  value={formik.values.skill}
                  onChange={handleChange}
                  options={options2}
                  label="Niveau"
                />

                {formik.touched.skill && formik.errors.skill ? (
                  <div className="formikErrorAuto mt-2"> {formik.errors.skill}</div>
                ) : null}
              </div>
            </div>
            <div className="d-flex">
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
          </form>
        </div>
      </div>
    </div>
  );
}
