import React, { useState } from "react";
import { Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../../../../../../components/UI/CardWithImage/OfferCardItem";

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
  const [loading, setLoading] = useState(false);

  //   ************
  //   ******************************************
  // states

  //
  const formik = useFormik({
    initialValues: SKILLS_STATE,
    validationSchema: SKILLS_YUP,
    onSubmit: (values) => {
      setLoading(true);
      let check = SOFT_SKILLS_DB.some((sa) => sa === values.name);
      if (check === false) {
        let skills = options.find((sa) => sa._id === values.name);

        let obj = {};
        DB_Array.push(skills);
        obj.softSkills = DB_Array;
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
  const handleSoftSkillDelete = (id) => {
    if (DB_Array.length > 0) {
      let fifa = DB_Array.filter((dt) => dt._id !== id);
      let obj = {};
      obj.softSkills = fifa;
      let response = dispatch(Add_info_Student(obj));

      response.then((value) => {
        if (value === true) {
          props.setDB_Array(fifa);
        }
      });
    }
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
                <div className="formikErrorAuto mt-2">
                  {" "}
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

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
                          key={job._id}
                          id={job._id}
                          className="offer-detail-skills"
                          content={job.skillField}
                          handleDelete={handleSoftSkillDelete}
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
