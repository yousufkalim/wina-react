import React, { useState } from "react";
import { Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../../../../../../components/UI/CardWithImage/OfferCardItem";
import CustomTextField from "../../../../../../components/UI/CustomTextField/CustomTextField";

export default function Hard_skilltab(props) {
  const {
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
  const [loading, setLoading] = useState(false);
  //   ******************************************
  const formik = useFormik({
    initialValues: SKILLS_STATE,
    validationSchema: SKILLS_YUP,
    onSubmit: (values) => {
      setLoading(true);

      let check = LANGUAGES_DB.some((sa) => sa.name === values.name);
      if (check === false) {
        let skills = { name: formik.values.name };

        let obj = {};
        DB_Array.push(skills);
        obj.languages = DB_Array;
        let response = dispatch(Add_info_Student(obj));

        response.then((value) => {
          if (value === true) {
            formik.setSubmitting(false);
            formik.handleReset();
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      } else {
        setLoading(false);

        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("Le nom de la langue existait déjà", "error")
          )
        );
      }
    },
  });

  const handleLanguageDelete = (id) => {
    if (DB_Array.length > 0) {
      let fifa = DB_Array.filter((dt) => dt.name !== id);
      let obj = {};
      obj.languages = fifa;
      let response = dispatch(Add_info_Student(obj));
      response.then((value) => {
        if (value === true) {
          props.setDB_Array(fifa);
        }
      });
    }
  };
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
                {/* Textfield for language */}
                <CustomTextField
                  type="text"
                  variant="outlined"
                  name="name"
                  value={formik.values.name}
                  onChange={handleChange}
                  label="Langue"
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="formikErrorAuto mt-2">
                    {formik.errors.name}
                  </div>
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
                  <div className="formikErrorAuto mt-2">
                    {" "}
                    {formik.errors.skill}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="d-flex">
              {loading ? (
                <Button
                  className="Enregistrer"
                  type="submit"
                  variant="primary"
                  value="Loading...."
                  disabled={loading}
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
          <div
            className="offer-detail-date-container mt-4"
            style={{ paddingLeft: "15px" }}
          >
            <div className="d-flex justify-content-between">
              {DB_Array && DB_Array.length > 0
                ? DB_Array.map((job) => {
                    return (
                      <div>
                        <CardItem
                          key={job.name}
                          id={job.name}
                          className="offer-detail-skills"
                          content={job.name}
                          handleDelete={handleLanguageDelete}
                          times
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
