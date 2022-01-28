import React, { useState } from "react";
import { Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import CardItem from "../../../../../../components/UI/CardWithImage/OfferCardItem";

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
    HARD_SKILLS_DB,
    Notistack,
    // Autocomplete,
  } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const classes = useStyle();
  const [value, setValue] = useState("");

  const [skill, setSkill] = useState("");

  //   ************
  //   ******************************************
  const formik = useFormik({
    initialValues: SKILLS_STATE,
    validationSchema: SKILLS_YUP,
    onSubmit: (values) => {
      console.log("aa");
      setLoading(true);

      let check = HARD_SKILLS_DB.some((sa) => sa === values.name);
      if (check === false) {
        let skills = options.find((sa) => sa._id === values.name);
        let obj = {};
        DB_Array.push(skills);
        obj.hardSkills = DB_Array;
        let response = dispatch(Add_info_Student(obj));
        response.then((value) => {
          if (value === true) {
            formik.setSubmitting(false);
            formik.handleReset();
            setValue("");

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
              "Le nom de la compétence matérielle existait déjà",
              "error"
            )
          )
        );
      }
    },
  });
  const handleHardSkillDelete = (id) => {
    if (DB_Array.length > 0) {
      let fifa = DB_Array.filter((dt) => dt._id !== id);
      let obj = {};
      obj.hardSkills = fifa;
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

  // for autocomplete
  const getAllSkills = (e) => {
    // console.log("e.targer", e.target.value, e.target.name);
    setSkill(e.target.value);
    // call api to get all

    // after set all skill in array to show

    // setValue(e.target.value)
  };
  const handleSetSkill = (event, value) => {
    console.log("handleSetSkill", value);
    // setSkill and value name in also formik.setFieeldvalues
    setValue(value?._id);
    formik.setFieldValue("name", value?._id);
  };
  const OnhandleSubmit = () => {
    setLoading(true);

    let check = HARD_SKILLS_DB.some((sa) => sa === value);
    if (check === false) {
      let skills = options.find((sa) => sa._id === value);
      let obj = {};
      DB_Array.push(skills);
      obj.hardSkills = DB_Array;
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
            "Le nom de la compétence matérielle existait déjà",
            "error"
          )
        )
      );
    }
  };
  return (
    <div className="GeneralSkillsBox">
      <div className="GeneralSkills">
        <div className="GSkillsBox">
          <div className="skills-heading">
            Dites-nous vos compétences spécialisées :
          </div>
          <div className="text-left">
            <div className="skills-heading-line"></div>
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-5">
            <div className="col-lg-4 col-md-6 mb-5 mt-2">
              <Autocomplete
                className={classes.root}
                PaperComponent={({ children }) => (
                  <Paper style={{ background: "" }}>{children}</Paper>
                )}
                options={options}
                freeSolo
                getOptionLabel={(option) => option.skillField}
                onChange={handleSetSkill}
                style={{
                  width: "91%",
                  margin: "auto",
                }}
                renderInput={(params) => (
                  <TextField
                    // classes={{ root: classes.customTextField }}
                    {...params}
                    placeholder="compétences spécialisées"
                    variant="outlined"
                    name="skill"
                    value={skill}
                    onChange={getAllSkills}
                  />
                )}
              />
            </div>

            {/* <div className="col-lg-4 col-md-6 mb-5 mt-2">
            <Select
              name="name"
              value={formik.values.name}
              onChange={handleChange}
              options={options}
              label="Compétences"
              type="skills"
            />

            {formik.touched.name && formik.errors.name ? (
              <div className="formikErrorAuto"> {formik.errors.name}</div>
            ) : null}
          </div> */}
            <div></div>

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
                // onClick={OnhandleSubmit}
                variant="primary"
                value="S’ENREGISTRER"
                disabled={loading}
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
                          handleDelete={handleHardSkillDelete}
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
