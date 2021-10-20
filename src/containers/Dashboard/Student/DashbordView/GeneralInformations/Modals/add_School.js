import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { SCOOL_STATE } from "../../../../../../Globals/InitialValues/Student";
import { SCOOL_YUP } from "../../../../../../components/Formik/Student/yupValidation";
import DatePicker from "../../../../../../components/UI/DatePicker";
import Button from "../../../../../../components/UI/Button";
import axios from "axios";
import TextArea from "../../../../../../components/UI/Textarea";
import SchoolModal from "../../../../../../components/UI/Modal";
import ModalInput from "../../../../../../components/UI/TextField";
import Input from "../../../../../../components/UI/Input";
import { baseUrl } from "../../../../../../urlConfig";
import { useDispatch, useSelector } from "react-redux";
import { Add_Image_info_Student } from "../../../../../../Redux/actions";
import * as Notistack from "../../../../../../Redux/actions/notistack";
import moment from "moment";
import TextFieldRound from "./../../../../../../components/UI/CustomTextField/TextFieldRound";
const GeneralInformationsModal = ({ show, setShow, schoolsArray }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.student);
  const [Image, setImage] = useState("");
  const [ImageUri, setImageURI] = useState(
    "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"
  );
  const hiddenFileInput = useRef(null);

  // formik
  const formik = useFormik({
    initialValues: SCOOL_STATE,
    validationSchema: SCOOL_YUP,
    onSubmit: async (values) => {
      let check = schoolsArray.some((sa) => sa.school === values.school);
      const formdataImage = new FormData();
      formdataImage.append("image", Image);
      const imageData = await axios({
        method: "post",
        url: `${baseUrl}/FileUpload`,
        data: formdataImage,
      });
      let imagePath = imageData.data;
      if (check === false) {
        values.image = imagePath;
        let array = [...schoolsArray, values];
        let form_data = new FormData();
        form_data.append("education", JSON.stringify(array));
        dispatch(Add_Image_info_Student(form_data));
        setShow(false);
        formik.resetForm();
        setImage("");
        setImageURI(
          "https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg"
        );
      } else {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("Le nom de l'école existait déjà", "error")
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
        setImage(file);
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setImageURI(reader.result);
        formik.setFieldValue("image", file.name);
      } else {
        alert("Vous ne pouvez télécharger que des images");
      }
    } else if (formik.values.start_Date && name == "end_Date") {
      let end_Date = moment(value);
      let start_Date = moment(formik.values.start_Date);
      if (start_Date.isSame(end_Date, "day")) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(
              "La date de fin ne peut pas être antérieure à la date de début",
              "error"
            )
          )
        );
      } else {
        formik.setFieldValue(name, value);
      }
    } else {
      formik.setFieldValue(name, value);
    }
  };
  // custom image

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <SchoolModal
      show={show}
      className="custom-modal"
      handleClose={() => setShow(false)}
      modalTitle="Formation / École"
      children={
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex mb-3 add-school-field">
            <div className="col-lg-4">
              <TextFieldRound
                name="school"
                label="École"
                value={formik.school}
                onChange={handleChange}
                variant="outlined"
                type="text"
              />
              {formik.touched.school && formik.errors.school ? (
                <div className="formikErrorAuto"> {formik.errors.school}</div>
              ) : null}
            </div>
          </div>

          <div className="d-flex mt-5 py-3">
            <div className="col-lg-3">
              <DatePicker
                name="start_Date"
                previous={true}
                label={"Date de début"}
                value={formik.values.start_Date}
                onChange={handleChange}
              />
              {formik.touched.start_Date && formik.errors.start_Date ? (
                <div className="formikErrorDate">
                  {" "}
                  {formik.errors.start_Date}
                </div>
              ) : null}
            </div>
            <div className="col-lg-3">
              <DatePicker
                name="end_Date"
                label={"Date de fin"}
                previous={true}
                value={formik.values.end_Date}
                onChange={handleChange}
              />
              {formik.touched.end_Date && formik.errors.end_Date ? (
                <div className="formikErrorDate"> {formik.errors.end_Date}</div>
              ) : null}
            </div>
          </div>
          <div className="d-flex mt-5">
            <div className="col-lg-12">
              <TextArea
                name="description"
                label="Description"
                grey
                value={formik.description}
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
            <div className="col-lg-6 mt-4">
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

              {formik.touched.image && formik.errors.image ? (
                <div className="formikErrorAuto"> {formik.errors.image}</div>
              ) : null}
            </div>
          </div>
          <div className="d-flex ">
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
      }
    />
  );
};

export default GeneralInformationsModal;
