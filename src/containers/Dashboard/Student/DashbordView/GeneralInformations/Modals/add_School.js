import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SCOOL_STATE } from "../../../../../../Globals/InitialValues/Student";
import { SCOOL_YUP } from "../../../../../../components/Formik/Student/yupValidation";
import DatePicker from "../../../../../../components/UI/DatePicker";
import Button from "../../../../../../components/UI/Button";

import TextArea from "../../../../../../components/UI/Textarea";
import SchoolModal from "../../../../../../components/UI/Modal";
import ModalInput from "../../../../../../components/UI/TextField";
import Input from "../../../../../../components/UI/Input";

import { useDispatch, useSelector } from "react-redux";
import {
  getApiAdress,
  Add_info_Student,
  Add_Image_info_Student,
} from "../../../../../../Redux/actions";
import * as Notistack from "../../../../../../Redux/actions/notistack";
const GeneralInformationsModal = ({ show, setShow, schoolsArray }) => {
  const dispatch = useDispatch();
  const store2 = useSelector((state) => state.globals);
  const store = useSelector((state) => state.user);
  const [Image, setImage] = useState("");
  // formik
  const formik = useFormik({
    initialValues: SCOOL_STATE,
    validationSchema: SCOOL_YUP,
    onSubmit: (values) => {
      let check = schoolsArray.some((sa) => sa.school === values.school);
      if (check === false) {
        let obj = {};

        schoolsArray.push(values);
        obj.education = schoolsArray;
        // let form_data = new FormData();
        // form_data.append("school_image", Image);
        // form_data.append("education", JSON.stringify(obj));
        // dispatch(Add_Image_info_Student(form_data));
        dispatch(Add_info_Student(obj, formik));
        setShow(false);
      } else {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("School name already existed", "error")
          )
        );
      }
    },
  });
  // handle file change

  const handleFileUpload = (e) => {
    if (e.target.files.length) {
      let file = e.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        // let form_data = new FormData();
        // form_data.append("school_image", file);
        // dispatch(Add_Image_info_Student(form_data));
        setImage(file);
      } else {
        alert("You can upload only images ");
      }
    }
  };
  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      let file = e.target.files[0];
      formik.setFieldValue(name, file);
    }
    formik.setFieldValue(name, value);
  };

  return (
    <SchoolModal
      show={show}
      className="custom-modal"
      handleClose={() => setShow(false)}
      modalTitle="Formation / École"
      children={
        <div class="container">
          <div className="row">
            <div className="col-lg-12 ">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <ModalInput
                    name="school"
                    label="École"
                    // className="Job_title"
                    placeholder="École"
                    value={formik.school}
                    onChange={handleChange}
                    type="text"
                  />
                  {formik.touched.school && formik.errors.school ? (
                    <div className="formikErrorAuto">
                      {" "}
                      {formik.errors.school}
                    </div>
                  ) : null}
                </div>
                <div className="DateRow ">
                  <div>
                    <DatePicker
                      name="start_Date"
                      label={"Date de fin"}
                      value={formik.start_Date}
                      onChange={handleChange}
                    />
                    {formik.touched.start_Date && formik.errors.start_Date ? (
                      <div className="formikErrorDate">
                        {" "}
                        {formik.errors.start_Date}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <DatePicker
                      name="end_Date"
                      label={"Date de fin"}
                      value={formik.end_Date}
                      onChange={handleChange}
                    />
                    {formik.touched.end_Date && formik.errors.end_Date ? (
                      <div className="formikErrorDate">
                        {" "}
                        {formik.errors.end_Date}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-2">
                  <Input
                    name="image"
                    placeholder="professional_Picture"
                    onChange={handleFileUpload}
                    type="file"
                    accept="image"
                  />
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
                <div>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default GeneralInformationsModal;
