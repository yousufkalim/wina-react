import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SCOOL_STATE } from "../../../../../../Globals/InitialValues/Student";
import { SCOOL_YUP } from "../../../../../../components/Formik/Student/yupValidation";
import AutoComplete from "../../../../../../components/UI/AutoComplete";
import DatePicker from "../../../../../../components/UI/DatePicker";
import TextArea from "../../../../../../components/UI/Textarea";
import SchoolModal from "../../../../../../components/UI/Modal";
import Texts from "../../../../../../Globals/Texts";
import { useDispatch, useSelector } from "react-redux";
import ModalInput from "../../../../../../components/UI/TextField";
import Button from "../../../../../../components/UI/Button";

import {
  getApiAdress,
  Add_info_Student,
} from "../../../../../../Redux/actions";

const GeneralInformationsModal = ({
  show,
  setShow,
  id,
  schoolsArray,
  data,
  setedit_school_id,
}) => {
  const dispatch = useDispatch();
  const store2 = useSelector((state) => state.globals);
  const store = useSelector((state) => state.user);

  // states
  const [items, setItems] = useState([]);

  // formik
  const formik = useFormik({
    initialValues: SCOOL_STATE,
    validationSchema: SCOOL_YUP,
    onSubmit: (values) => {
      if (id) {
        let obj = {};
        let temp = data.findIndex((dt) => dt._id === id);
        console.log(temp, "temp");
        schoolsArray[temp] = values;
        obj.education = schoolsArray;
        dispatch(Add_info_Student(obj, formik));
        setShow(false);
        setedit_school_id("");
      }
    },
  });

  useEffect(() => {
    if (data && id) {
      let temp = data.find((dt) => dt._id === id);
      if (temp) {
        formik.setFieldValue("description", temp.description);
        formik.setFieldValue("end_Date", temp.end_Date);
        formik.setFieldValue("start_Date", temp.start_Date);
        formik.setFieldValue("school", temp.school);
      }
    }
  }, [id, show, setShow]);
  // conso,showle.log(formik, "formik");

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (value.length <= 10) {
        formik.setFieldValue(name, value.replace(/\D/g, ""));
      }
    } else {
      formik.setFieldValue(name, value);
    }
  };
  const handleAddressChange = (value) => {
    dispatch(getApiAdress(value));
    if (store2.items.length > 0) {
      setItems(
        store2.items.map((item) => {
          return {
            id: item.properties.id,
            name: item.properties.label,
            city: item.properties.city,
            postalCode: item.properties.postcode,
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
          };
        })
      );
    }
  };
  const onSubmitAddress = (value) => {
    formik.setFieldValue("school", value.city);
  };

  return (
    <SchoolModal
      show={show}
      className="custom-modal"
      handleClose={() => setShow(false)}
      modalTitle="Formation / École"
      children={
        data && id ? (
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
                      value={formik.values.school}
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
                    <div>
                      <DatePicker
                        name="end_Date"
                        label={"Date de fin"}
                        value={formik.values.end_Date}
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
                  <div className="description">
                    <TextArea
                      name="description"
                      value={formik.values.description}
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
                </form>
              </div>
            </div>
          </div>
        ) : (
          "Loading data...."
        )
      }
    />
  );
};

export default GeneralInformationsModal;
