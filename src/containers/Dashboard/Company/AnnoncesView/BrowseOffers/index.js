import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Nav, Tab, Tabs, Image, Form } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { makeStyles } from "@material-ui/core/styles";
import { POSITION_SOUGHT_STATE } from "../../../../../Globals/InitialValues/Company";
import { POSITION_SOUGHT_YUP } from "../../../../../components/Formik/Company/yupValidation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "../../../../../components/UI/DatePicker";
import Select from "../../../../../components/UI/Select";
import Button from "../../../../../components/UI/Button";
import axios from "axios";
import RadioButton from "../../../../../components/UI/RadioButton";
import { useHistory } from "react-router-dom";
import * as Notistack from "../../../../../Redux/actions/notistack";
import {
  DurationOptions,
  RythmeOptions,
  levelOfEducation,
  AgeRangeOptions,
} from "../../../../../Globals";
import {
  getSkills,
  getApiAdress,
  Create_Job,
} from "../../../../../Redux/actions";
import { domainListCompany } from "../../../../../Redux/actions/company";
import AutoComplete from "../../../../../components/UI/AutoComplete";
import MultiAutoComplete from "../../../../../components/UI/MultiSelect";
import TextArea from "../../../../../components/UI/Textarea";
import _ from "lodash";
import CustomTextField from "../../../../../components/UI/CustomTextField/CustomTextField";
import { baseUrl } from "../../../../../urlConfig";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import ModalInput from "../../../../../components/UI/TextField";
import Texts from "../../../../../Globals/Texts";
import Skills from "../../../Admin/skills/AddSkills";
import CardItem from "../../../../../components/UI/SkillsItem/skillsItem";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
export default function BrowseOffers() {
  const myRef = useRef(null);
  // const classes = useStyles();
  const [softSkillsArray, setsoftSkillsArray] = useState([]);
  const [domain, setDomain] = useState([]);
  const [address, setAddress] = useState("");
  const [multiSelect, setmultiSelect] = useState(0);
  const dispatch = useDispatch();
  const store2 = useSelector((state) => state.globals);
  const store = useSelector((state) => state.company);
  const store3 = useSelector((state) => state.auth);
  const [image, setImage] = useState("");
  const COMPANY = store3.user && store3.user.company;
  const [imageURI, setimageURI] = useState("");
  const [hardSkillsArray, sethardSkillsArray] = useState([]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = React.useState(30);
  const [softArray, setSoftArray] = useState([]);
  const [show, setShow] = useState(false);
  const history = useHistory();
  let SOFT_SKILLS = store2.soft_skills;
  let HARD_SKILLS = store2.hard_skills;
  let JOB_MESSAGE_SUCCESS = store.message;
  // formik
  const formik = useFormik({
    initialValues: POSITION_SOUGHT_STATE,
    validationSchema: POSITION_SOUGHT_YUP,
    onSubmit: async (values, actions) => {
      let tempValues = _.cloneDeep(values);
      const formdataImage = new FormData();
      formdataImage.append("image", image);
      const imageData = await axios({
        method: "post",
        url: `${baseUrl}/FileUpload`,
        data: formdataImage,
      });
      let imagePath = imageData.data;
      tempValues.softSkills = softSkillsArray;
      tempValues.hardSkills = hardSkillsArray;
      tempValues.photo = imagePath;
      let response = dispatch(Create_Job(tempValues));
      response.then((value) => {
        if (value === true) {
          formik.setFieldValue("location", {
            city: "",
            street: "",
            zip: "",
            longitude: "",
            latitude: "",
          });
          setAddress("");
          setmultiSelect(multiSelect + 1);
          formik.setSubmitting(false);
          formik.handleReset();
          setsoftSkillsArray([]);
          sethardSkillsArray([]);
          setItems([]);
          setimageURI("");
          setImage("");
        }
      });
    },
  });
  // onChange
  const handleChange = (e) => {
    console.log("typingg....");
    const { name, value } = e.target;
    if (name === "photo") {
      let file = e.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        let uri = URL.createObjectURL(file);
        setimageURI(uri);
        setImage(file);
        formik.setFieldValue("photo", file.name);
      } else {
        alert("Vous ne pouvez télécharger que des images ");
      }
    }
    formik.setFieldValue(name, value);
  };
  // useEffect
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);
  useEffect(() => {
    dispatch(getSkills("Soft Skill", query));
    dispatch(getSkills("Hard Skill", query));
  }, []);
  useEffect(() => {
    if (COMPANY && COMPANY.address && Object.keys(COMPANY).length > 0) {
      const {
        address: { city, street, zip, longitude, latitude },
      } = COMPANY;
      formik.setFieldValue("location", {
        city: city,
        street: street,
        zip: zip,
        longitude: longitude,
        latitude: latitude,
      });
    }
  }, []);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  const handleAddressChange = (value) => {
    setAddress(value);
    dispatch(getApiAdress(value));
    if (store2.items.length > 0) {
      setItems(
        store2.items.map((item) => {
          return {
            id: item.properties.id,
            name: item.properties.label,
            city: item.properties.city,
            postalCode: item.properties.citycode,
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
          };
        })
      );
    }
  };
  const onSubmitAddress = (value) => {
    formik.setFieldValue("location", {
      city: value.city,
      street: value.name,
      zip: value.postalCode ? value.postalCode : "40180",
      longitude: value.lng,
      latitude: value.lat,
    });
  };
  const onSoftSkillChange = (value) => {
    const valueArray = [];
    for (let i = 0; i < value.length; i++) {
      valueArray.push(value[i]._id);
    }
    if (valueArray.length > 0) {
      formik.setFieldValue("softSkills", valueArray[0]);
    } else {
      formik.setFieldValue("softSkills", "");
    }
    setSoftArray(value);

    setsoftSkillsArray(valueArray);
  };
  const onHardSkillChange = (value) => {
    const valueArray = [];
    const allArray = [];
    for (let i = 0; i < value.length; i++) {
      valueArray.push(value[i]._id);
      allArray.push(value[i]);
    }
    if (valueArray.length > 0) {
      formik.setFieldValue("hardSkills", valueArray[0]);
    } else {
      formik.setFieldValue("hardSkills", "");
    }
    setSoftArray(value);
    sethardSkillsArray(valueArray);
  };

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const domainOption = async () => {
    const res = await domainListCompany();
    let tempDomain = [];
    res.data.domains.map((item) => {
      tempDomain.push({ title: item.title });
    });
    setDomain(tempDomain);
  };
  useEffect(() => {
    domainOption();
  }, [domainListCompany]);

  return (
    <>
      <Tabs defaultActiveKey="publish" id="publish" className="publish">
        <Tab eventKey="publish" title="Publier" className="h-100">
          <div className="publishBox">
            <div className="publish custom-box">
              <form onSubmit={formik.handleSubmit}>
                <Row className="publish-header align-items-start mt-0">
                  <Col lg={4} md={4}>
                    <div className="add_image_icon">
                      <label htmlFor="upload-button">
                        <Image
                          src={
                            imageURI ? imageURI : "../images/add_image_icon.png"
                          }
                        />
                        {formik.touched.photo && formik.errors.photo ? (
                          <div className="formikError">
                            {" "}
                            {formik.errors.photo}
                          </div>
                        ) : null}
                      </label>
                    </div>
                    <input
                      type="file"
                      id="upload-button"
                      name="photo"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg={8} md={8}>
                    <div ref={myRef} className="publish-header-content">
                      <div className="d-flex">
                        <div className="col-lg-6">
                          <CustomTextField
                            label="Nom du poste"
                            name="position"
                            id="outlined-basic"
                            onChange={handleChange}
                            value={formik.values.position}
                            variant="outlined"
                          />

                          {formik.touched.position && formik.errors.position ? (
                            <div className="formikErrorAuto">
                              {" "}
                              {formik.errors.position}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 ml-3">
                          <CustomTextField
                            label="Titre"
                            name="title"
                            id="outlined-basic"
                            onChange={handleChange}
                            value={formik.values.title}
                            variant="outlined"
                          />

                          {formik.touched.title && formik.errors.title ? (
                            <div className="formikErrorAuto">
                              {" "}
                              {formik.errors.title}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="d-flex mt-4">
                        <div className="col-lg-6 ">
                          <Select
                            name="domain"
                            value={formik.values.domain}
                            onChange={handleChange}
                            options={domain}
                            label="Domaine"
                          />

                          {formik.touched.domain && formik.errors.domain ? (
                            <div className="formikErrorDate">
                              {" "}
                              {formik.errors.domain}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 ml-3">
                          <Select
                            name="levelOfEducation"
                            value={formik.values.levelOfEducation}
                            onChange={handleChange}
                            options={levelOfEducation}
                            label="Niveau d’étude"
                          />

                          {formik.touched.levelOfEducation &&
                          formik.errors.levelOfEducation ? (
                            <div className="formikErrorAuto">
                              {" "}
                              {formik.errors.levelOfEducation}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-4 d-flex">
                        <div className="col-lg-6 ">
                          <Select
                            name="ageRange"
                            value={formik.values.ageRange}
                            onChange={handleChange}
                            options={AgeRangeOptions}
                            label="Tranche d'âge"
                          />

                          {formik.touched.ageRange && formik.errors.ageRange ? (
                            <div className="formikErrorDate">
                              {" "}
                              {formik.errors.ageRange}
                            </div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 ml-3">
                          <Select
                            name="duration"
                            value={formik.values.duration}
                            onChange={handleChange}
                            options={DurationOptions}
                            label="Durée"
                          />

                          {formik.touched.duration && formik.errors.duration ? (
                            <div className="formikErrorDate">
                              {" "}
                              {formik.errors.duration}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-4 d-flex">
                        <div className="col-lg-6 ">
                          <DatePicker
                            name="startDate"
                            label={"Date de début"}
                            value={formik.values.startDate}
                            onChange={handleChange}
                          />
                          {formik.touched.startDate &&
                          formik.errors.startDate ? (
                            <div className="formikErrorDate">
                              {formik.errors.startDate}
                            </div>
                          ) : null}
                        </div>

                        <div
                          className="col-lg-6 ml-3"
                          style={{ paddingTop: "10px" }}
                        >
                          <AutoComplete
                            formik={formik}
                            onChange={handleAddressChange}
                            items={items}
                            address={address}
                            placeholder="Adresse"
                            name={"location"}
                            loading={store2.loading}
                            onSubmit={onSubmitAddress}
                          />
                          {formik.touched.location && formik.errors.location ? (
                            <div className="formikErrorAuto">
                              {" "}
                              {formik.errors.location.city}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="d-flex pt-4">
                  <div className="col-lg-12">
                    <TextArea
                      name="description"
                      placeholder="Description"
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
                </div>
                <div className="d-flex my-3">
                  <div className="col-lg-6 softskills-input">
                    <Select
                      options={RythmeOptions}
                      name="alternationRhythm"
                      label="Rythme alternances"
                      value={formik.values.alternationRhythm}
                      onChange={handleChange}
                    />
                    {/* <RadioButton
                      options={RythmeOptions}
                      className={classes.radioButton}
                      name="alternationRhythm"
                      label="Rythme alternances :"
                      value={formik.values.alternationRhythm}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
                {formik.touched.alternationRhythm &&
                formik.errors.alternationRhythm ? (
                  <div className="formikErrorAuto">
                    {" "}
                    {formik.errors.alternationRhythm}
                  </div>
                ) : null}
                <div className="d-flex my-3">
                  <div className="col-lg-6 softskills-input">
                    <MultiAutoComplete
                      formik={formik}
                      placeholder="Compétences générales "
                      items={SOFT_SKILLS}
                      name={"softSkills"}
                      loading={store.loading}
                      onSubmit={onSoftSkillChange}
                      multiSelect={multiSelect}
                      query={query}
                      setQuery={setQuery}
                    />

                    {formik.touched.softSkills && formik.errors.softSkills ? (
                      <div className="formikErrorDate">
                        {formik.errors.softSkills}
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* <div className="d-flex">
									{
										softArray.map((item, index) => (

											<CardItem
												key={item._id}
												className="offer-card-item-bordered company-offer-detail-content"
												content={item.skillField}
												item={item}
												/>
										))
									}
								</div> */}
                <div className="d-flex">
                  <div className="col-lg-6 softskills-input">
                    <MultiAutoComplete
                      formik={formik}
                      placeholder="Compétences spécialisées"
                      items={HARD_SKILLS}
                      name={"hardSkills"}
                      loading={store2.loading}
                      onSubmit={onHardSkillChange}
                      multiSelect={multiSelect}
                    />

                    {formik.touched.hardSkills && formik.errors.hardSkills ? (
                      <div className="formikErrorDate">
                        {formik.errors.hardSkills}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="d-flex">
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
                        onClick={executeScroll}
                        className="Enregistrer"
                        type="submit"
                        variant="primary"
                        value="Ajouter"
                        disabled={false}
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
// ******************************
// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const useStyles = makeStyles({
//   root: {
//     width: "15.6rem",
//   },
//   input: {
//     width: "5.4rem",
//     paddingLeft: 9,
//     position: "absolute",
//     marginLeft: "6.2rem",
//   },
//   radioButton: {
//     "& .MuiFormLabel-root": {
//       color: "#454545",
//       fontWeight: 600,
//     },
//   },
// });
