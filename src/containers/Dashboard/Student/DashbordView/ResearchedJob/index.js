import React, { useState } from "react";
import {
  Row,
  Col,
  Nav,
  Tab,
  Tabs,
  Image,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ResearchedJob = () => {
  const schoolName = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];
  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Tabs
        defaultActiveKey="Research"
        id="ResearchedJob"
        className="ResearchedJob upper-nav custom-tabs"
      >
        <Tab eventKey="Research" title="Recherche">
          <div className="ResearchBox custom-box">
            <Row className="Research align-items-center">
              <Col lg={6} md={6} className="col-6-width pl-0">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Description"
                  />
                </Form.Group>
              </Col>
              <Col lg={3} md={3}>
                <div className="Field">
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    className="Field"
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
                        placeholder="Domaine"
                      />
                    )}
                  />
                </div>
              </Col>
              <Col lg={3} md={3}>
                <div className="LevelOfStudy">
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    className="Field"
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
                        placeholder="Niveau d’étude"
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>
            <Row className="levelofStudyBox">
              <Col lg={3} md={3} className="col-3-width">
                <div className="LevelOfStudy">
                  <label>Date de début</label>
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    className="Field"
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
                        placeholder="Mois"
                      />
                    )}
                  />
                </div>
              </Col>
              <Col lg={3} md={3} className="col-3-width">
                <div className="LevelOfStudy">
                  <label>&nbsp;</label>
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    className="Field"
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
              </Col>
              <Col lg={3} md={3} className="col-3-width">
                <div className="LevelOfStudy">
                  <label>Durée</label>
                  <Autocomplete
                    //   multiple
                    id="checkboxes-tags-demo"
                    className="Field"
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
              </Col>
              <Col lg={3} md={3}></Col>
            </Row>
            <div className="checkBoxes">
              <div className="alternationRhythm-width">
                <div className="alternationRhythm">Rythme alternances :</div>
              </div>
              <div className="oneBusinessWeekWidth">
                <Form.Check type="checkbox" label="1 semaine entreprise" />
              </div>
              <div className="oneSchoolWeekWidth">
                <Form.Check type="checkbox" label="1 semaine école" />
              </div>
              <div className="choicetwoWidth">
                <Form.Check type="checkbox" label="Choix 2" />
              </div>
              <div className="choicetwoWidth">
                <Form.Check type="checkbox" label="Choix 3" />
              </div>
              <div className="choicetwoWidth">
                <Form.Check type="checkbox" label="Choix 4" />
              </div>
            </div>

            <div className="jobIsProvided text-left">
              <Form.Check type="checkbox" label="Le poste est pourvu" />
            </div>
          </div>
        </Tab>
        {/* <Tab eventKey="Favoris" title="Favoris">
          Favoris
        </Tab>
        <Tab eventKey="Historique" title="Historique">
          Historique
        </Tab> */}
      </Tabs>
    </>
  );
};
export default ResearchedJob;
