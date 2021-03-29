import React, { useState } from "react";
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

const BrowseOffers = () => {
  const [show, setShow] = useState(false);
  const SchoolModalShow = () => {
    setShow(!show);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
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
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <>
      <Tabs defaultActiveKey="publish" id="publish" className="publish">
        <Tab eventKey="publish" title="Publier" className="h-100">
          <div className="publishBox">
            <div className="publish custom-box">
              <Link to="#" className="edit_icons">
                <Image src="../images/edit_icon.png" />
              </Link>
              <Row className="publish-header align-items-center">
                <Col lg={4} md={4}>
                  <div className="add_image_icon">
                    <Image src="../images/add_image_icon.png" />
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="publish-header-content">
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      className="publish-jobname"
                    />
                    <div className="FieldAndPlaces">
                      <Form.Control
                        type="text"
                        placeholder="Domaine"
                        className="publish-fieldname"
                      />

                      <Form.Control
                        type="email"
                        placeholder="Lieux"
                        className="publish-fieldname"
                      />
                    </div>
                    <div className="startDateandDuration">
                      <div className="startDate">
                        <label>Date de début</label>
                        <Autocomplete
                          //   multiple
                          id="checkboxes-tags-demo"
                          options={schoolName}
                          disableCloseOnSelect
                          getOptionLabel={(option) => option.title}
                          renderOption={(option, { selected }) => (
                            <React.Fragment>
                              <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                                color={"primary"}
                              />
                              {option.title}
                            </React.Fragment>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              //   label="École"
                              placeholder="Année"
                            />
                          )}
                        />
                      </div>
                      <div className="Duration">
                        <label>Durée</label>
                        <Autocomplete
                          //   multiple
                          id="checkboxes-tags-demo"
                          options={schoolName}
                          disableCloseOnSelect
                          getOptionLabel={(option) => option.title}
                          renderOption={(option, { selected }) => (
                            <React.Fragment>
                              <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                                color={"primary"}
                              />
                              {option.title}
                            </React.Fragment>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              //   label="École"
                              placeholder="Choisir"
                            />
                          )}
                        />
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

              <Row className="generalSkills">
                <Col md={5} className="generalSkills-skills">
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    options={schoolName}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                          color={"primary"}
                        />
                        {option.title}
                      </React.Fragment>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        //   label="École"
                        placeholder="Compétences générales "
                      />
                    )}
                  />
                </Col>
              </Row>
              <div className="description">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Description"
                  />
                </Form.Group>
              </div>

              <Row className="generalSkills">
                <Col md={5} className="generalSkills-skills">
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    options={schoolName}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                          color={"primary"}
                        />
                        {option.title}
                      </React.Fragment>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        //   label="École"
                        placeholder="Compétences spécialisées"
                      />
                    )}
                  />
                </Col>
              </Row>
              <div className="description">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Description"
                  />
                </Form.Group>
              </div>
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
};
export default BrowseOffers;
