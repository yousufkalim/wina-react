import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useFormik } from "formik";
import ModalInput from "../../../../../../components/UI/TextField";
import Select from "../../../../../../components/UI/Select";
import DatePicker from "../../../../../../components/UI/DatePicker";
import TextArea from "../../../../../../components/UI/Textarea";
import Button from "../../../../../../components/UI/Button";
import CustomTextField from "../../../../../../components/UI/CustomTextField/CustomTextField";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiAdress,
  Add_Image_info_Student,
} from "../../../../../../Redux/actions";
import * as Notistack from "../../../../../../Redux/actions/notistack";
import Input from "../../../../../../components/UI/Input";
import axios from "axios";
import { baseUrl, baseUri } from "../../../../../../urlConfig";

import { PROFESSIONAL_PROFILE_STATE } from "../../../../../../Globals/InitialValues/Student";
import { PROFESSIONAL_PROFILE_YUP } from "../../../../../../components/Formik/Student/yupValidation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-body1": {
      fontSize: "1.375rem",
      color: "#8D8D8D",
    },
  },
});

const PPModal = ({
  show,
  setShow,
  professionalArray,
  data,
  id,
  setedit_profile_id,
}) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.student);
  const classes = useStyles();
  // const classes = useStyles();
  const [Image, setImage] = useState("");
  const [ImageUri, setImageURI] = useState(
    "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"
  );
  const hiddenFileInput = React.useRef(null);
  // custom image
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const formik = useFormik({
    initialValues: PROFESSIONAL_PROFILE_STATE,
    validationSchema: PROFESSIONAL_PROFILE_YUP,
    onSubmit: async (values) => {
      if (id) {
        if (Image) {
          const formdataImage = new FormData();
          formdataImage.append("image", Image);
          const imageData = await axios({
            method: "post",
            url: `${baseUrl}/FileUpload`,
            data: formdataImage,
          });
          let imagePath = imageData.data;

          values.image = imagePath;
        }
        values.duration = {
          start_date: values.start_date,
          end_date: values.end_date,
        };
        delete values.start_date;
        delete values.end_date;
        let temp = data.findIndex((dt) => dt._id === id);

        professionalArray[temp] = values;
        let form_data = new FormData();
        form_data.append(
          "professional_profile",
          JSON.stringify(professionalArray)
        );
        dispatch(Add_Image_info_Student(form_data));
        setShow(false);
        setedit_profile_id("");
      }
    },
  });
  useEffect(() => {
    if (data && id) {
      let temp = data.find((dt) => dt._id === id);

      if (temp) {
        console.log(temp, "temp");
        formik.setFieldValue("position", temp.position);
        formik.setFieldValue("end_date", temp.duration.end_date);
        formik.setFieldValue("start_date", temp.duration.start_date);
        formik.setFieldValue("company", temp.company);
        formik.setFieldValue("type", temp.type);
        formik.setFieldValue("place", temp.place);

        formik.setFieldValue("position_hold", temp.position_hold);
        formik.setFieldValue("description", temp.description);
        formik.setFieldValue("image", temp.image);
        setImageURI(`${baseUri}/${temp.image}`);
      }
    }
  }, [id, data, show, setShow]);
  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      let file = e.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setImageURI(reader.result);

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
        {data && id ? (
          <form
            onSubmit={formik.handleSubmit}
            className="mt-5 professional-modal-form"
          >
            <div className="professional-modal-form-first">
              <div className="professional-modal-form-position">
                <CustomTextField
                  name="position"
                  label="Intitulé du poste . Ex : Chef de projet"
                  // className="Job_title"
                  // placeholder="Intitulé du poste . Ex : Chef de projet"
                  variant="outlined"
                  value={formik.values.position}
                  onChange={handleChange}
                  type="text"
                />
                {formik.touched.position && formik.errors.position ? (
                  <div className="formikErrorAuto">
                    {" "}
                    {formik.errors.position}
                  </div>
                ) : null}
              </div>
              <div className="professional-modal-form-other">
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

              <div className="professional-modal-form-other">
                <CustomTextField
                  type="text"
                  variant="outlined"
                  name="company"
                  value={formik.values.company}
                  onChange={handleChange}
                  label="company d’emploi"
                />

                {formik.touched.company && formik.errors.company ? (
                  <div className="formikErrorAuto">
                    {" "}
                    {formik.errors.company}
                  </div>
                ) : null}
              </div>
              <div className="professional-modal-form-other">
                <CustomTextField
                  type="text"
                  variant="outlined"
                  name="place"
                  value={formik.values.place}
                  onChange={handleChange}
                  label="place d’emploi"
                />

                {formik.touched.place && formik.errors.place ? (
                  <div className="formikErrorAuto"> {formik.errors.place}</div>
                ) : null}
              </div>
            </div>

            <div className="professional-modal-form-second mt-5 align-items-end">
              <div className="professional-modal-form-checkbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formik.values.position_hold}
                      onChange={handleChange}
                      name="position_hold"
                      color="primary"
                    />
                  }
                  className={classes.root}
                  label="J’occupe actuellement ce poste"
                />
              </div>
              <div className="professional-modal-form-date ">
                <DatePicker
                  name="start_date"
                  label={"Date de début"}
                  previous={true}
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
              <div className="professional-modal-form-date">
                <DatePicker
                  name="end_date"
                  label={"Date de fin"}
                  previous={true}
                  value={formik.values.end_date}
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
            <div className="d-flex my-4 pt-3">
              <div className="col-lg-12">
                <TextArea
                  name="description"
                  grey
                  label="Description"
                  value={formik.values.description}
                  onChange={handleChange}
                  rows={3}
                  // placeholder="Description"
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="formikErrorDesc">
                    {" "}
                    {formik.errors.description}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="d-flex ">
              <div className="col-lg-6">
                <img
                  onClick={handleClick}
                  src={ImageUri}
                  alt=""
                  style={{
                    width: "200px",
                    objectFit: "fill",
                    height: "150px",
                    borderRadius: "5px",
                  }}
                />
                <input
                  name="image"
                  onChange={handleChange}
                  type="file"
                  ref={hiddenFileInput}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <br />
                <small
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  **Ajouter une photo.**
                </small>

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
                    value="Soumettre"
                    disabled={false}
                  />
                )}
              </div>
            </div>
          </form>
        ) : (
          <h1 className="">loading.....</h1>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PPModal;

/* eslint-disable no-use-before-define */

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const schoolName = [
  { name: "The Shawshank Redemption", year: 1994 },
  { name: "The Godfather", year: 1972 },
  { name: "The Godfather: Part II", year: 1974 },
  { name: "The Dark Knight", year: 2008 },
];
const startDate = [
  { title: "1994" },
  { title: "1972" },
  { title: "1974" },
  { title: "2008" },
];
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
const endDate = [
  { title: "1994" },
  { title: "1972" },
  { title: "1974" },
  { title: "2008" },
];
