import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Tab, Tabs, Image, Form, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { POSITION_SOUGHT_STATE } from "../../../../../Globals/InitialValues/Student";
import { POSITION_SOUGHT_YUP } from "../../../../../components/Formik/Student/yupValidation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ModalInput from "../../../../../components/UI/TextField";
import DatePicker from "../../../../../components/UI/DatePicker";
import Select from "../../../../../components/UI/Select";
import {
  DomainOptions,
  RythmeOptions,
  DurationOptions,
  levelOfEducation,
} from "../../../../../Globals";
import { getSkills, getApiAdress } from "../../../../../Redux/actions";
import AutoComplete from "../../../../../components/UI/AutoComplete";
import Texts from "../../../../../Globals/Texts";

export default function BrowseOffers() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const store2 = useSelector((state) => state.globals);
  const [image, setImage] = useState("");
  const [softSkillsArray, setsoftSkillsArray] = useState([]);
  const [hardSkillsArray, sethardSkillsArray] = useState([]);
  const [items, setItems] = useState([]);

  const [value, setValue] = React.useState(30);
  let SOFT_SKILLS = store2.soft_skills && store2.soft_skills;
  let HARD_SKILLS = store2.hard_skills;

  // formik
  const formik = useFormik({
    initialValues: POSITION_SOUGHT_STATE,
    validationSchema: POSITION_SOUGHT_YUP,
    onSubmit: async (values) => {},
  });

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      let file = e.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        setImage(file);
        formik.setFieldValue("image", file.name);
      } else {
        alert("You can upload only images ");
      }
    }
    formik.setFieldValue(name, value);
  };
  // useEffect
  useEffect(() => {
    dispatch(getSkills("Soft_Skill"));

    // dispatch(getSkills("Hard_Skill"));
  }, []);

  // get softs skills from DB
  useEffect(() => {
    setsoftSkillsArray(SOFT_SKILLS);
  }, [store2]);
  // get hard skills from DB
  useEffect(() => {
    sethardSkillsArray(HARD_SKILLS);
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
    formik.setFieldValue("address", {
      city: value.city,
      street: "Street",
      zip: value.PostalCode,
      longitude: value.lng,
      latitude: value.lat,
    });
  };

  const classes = useStyles();

  return (
    <>
      <Tabs defaultActiveKey="publish" id="publish" className="publish">
        <Tab eventKey="publish" title="Publier" className="h-100">
          <div className="publishBox">
            <div className="publish custom-box">
              <Row className="publish-header align-items-center">
                <Col lg={4} md={4}>
                  <div className="add_image_icon">
                    <Image src="../images/add_image_icon.png" />
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="publish-header-content">
                    <ModalInput
                      name="title"
                      label="Nom du poste"
                      // className="Job_title"
                      placeholder="Title"
                      value={formik.title}
                      onChange={handleChange}
                      type="text"
                    />
                    {formik.touched.title && formik.errors.title ? (
                      <div className="formikErrorAuto">
                        {" "}
                        {formik.errors.title}
                      </div>
                    ) : null}
                    <div className="FieldAndPlaces">
                      <Select
                        name="domain"
                        value={formik.values.domain}
                        onChange={handleChange}
                        options={DomainOptions}
                        label="Domaine"
                      />

                      {formik.touched.domain && formik.errors.domain ? (
                        <div className="formikErrorAuto">
                          {" "}
                          {formik.errors.domain}
                        </div>
                      ) : null}

                      <AutoComplete
                        formik={formik}
                        onChange={handleAddressChange}
                        placeholder={Texts.userProfile}
                        items={items}
                        name={"address"}
                        loading={store2.loading}
                        onSubmit={onSubmitAddress}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="formikErrorAuto">
                          {" "}
                          {formik.errors.address.city}
                        </div>
                      ) : null}
                    </div>
                    <div className="startDateandDuration">
                      <div>
                        <DatePicker
                          name="startDate"
                          label={"Date de début"}
                          value={formik.values.startDate}
                          onChange={handleChange}
                        />
                        {formik.touched.startDate && formik.errors.startDate ? (
                          <div className="formikErrorAuto">
                            {" "}
                            {formik.errors.startDate}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <Select
                          name="duration"
                          value={formik.values.duration}
                          onChange={handleChange}
                          options={DurationOptions}
                          label="Durée"
                        />

                        {formik.touched.duration && formik.errors.duration ? (
                          <div className="formikErrorAuto">
                            {" "}
                            {formik.errors.duration}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12}>
                  <div className="sliderBox">
                    <div className="label">Tranche de salaire</div>
                    <div className={(classes.root, "slider")}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                          <Slider
                            // disabled
                            // disabledaria-labelledby="disabled-slider"
                            value={typeof value === "number" ? value : 0}
                            onChange={handleSliderChange}
                            marks={marks}
                            min={0}
                            max={10000}
                          />
                        </Grid>
                        <Grid item>
                          <Input
                            className={classes.input}
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            endAdornment={
                              <InputAdornment position="end">€</InputAdornment>
                            }
                            inputProps={{
                              step: 10,
                              min: 0,
                              max: 10000,
                              type: "number",
                              "aria-labelledby": "input-slider",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={5} className="generalSkills-skills">
                  <Select
                    name="domain"
                    value=""
                    onChange={handleChange}
                    options={softSkillsArray}
                    label="Domaine"
                    type="skills"
                  />

                  {formik.touched.domain && formik.errors.domain ? (
                    <div className="formikErrorAuto">
                      {" "}
                      {formik.errors.domain}
                    </div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={5} className="generalSkills-skills">
                  <Select
                    name="domain"
                    value=""
                    onChange={handleChange}
                    options={hardSkillsArray}
                    label="Domaine"
                  />

                  {formik.touched.domain && formik.errors.domain ? (
                    <div className="formikErrorAuto">
                      {" "}
                      {formik.errors.domain}
                    </div>
                  ) : null}
                </Col>
              </Row>

              <div className="description">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Ce poste est pourvu" />
                </Form.Group>
              </div>

              <div className="text-right">
                <Button className="Enregistrer" variant="primary">
                  Enregistrer
                </Button>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
// ******************************
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles({
  root: {
    width: "15.6rem",
  },
  input: {
    width: "5.4rem",
    paddingLeft: 9,
    position: "absolute",
    marginLeft: "6.2rem",
  },
});
const schoolName = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];
const marks = [
  {
    value: 0,
    label: "0€",
  },
  {
    value: 10000,
    label: "10 000€",
  },
];
