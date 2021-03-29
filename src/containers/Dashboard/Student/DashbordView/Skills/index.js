import React, { useState } from "react";
import { Row, Col, Nav, Tab, Tabs, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Skills = () => {
  const schoolName = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];
  return (
    <>
      <Tabs
        defaultActiveKey="GeneralSkills"
        id="Skills"
        className="Skills upper-nav custom-tabs"
      >
        <Tab
          eventKey="GeneralSkills"
          title="Compétences générales"
          className="custom-box"
        >
          <div className="GeneralSkillsBox">
            <div className="GeneralSkills">
              <div className="text-right">
                <Link to="#">
                  <Image
                    src="../images/edit_icon.png"
                    className="custom-box-edit-icon"
                  />
                </Link>
              </div>
              <div className="GSkillsBox">
                <div className="skills-heading">
                  Dites-nous vos compétences générales :
                </div>
                <div className="text-left">
                  <div className="skills-heading-line"></div>
                </div>

                <div className="skills">
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
                        placeholder="Compétences"
                      />
                    )}
                  />
                </div>
                <div className="description">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Description"
                    />
                  </Form.Group>
                </div>

                <div className="skills">
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
                        placeholder="Compétences"
                      />
                    )}
                  />
                </div>
                <div className="description">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Description"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="SpecializedSkills"
          title="Compétences spécialisées"
          className="custom-box"
        >
          <div className="GeneralSkillsBox">
            <div className="GeneralSkills">
              <div className="text-right">
                <Link to="#">
                  <Image
                    src="../images/edit_icon.png"
                    className="custom-box-edit-icon"
                  />
                </Link>
              </div>
              <div className="GSkillsBox">
                <div className="skills-heading">
                Dites-nous vos compétences spécialisées :
                </div>
                <div className="text-left">
                  <div className="skills-heading-line"></div>
                </div>

                <div className="skills">
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
                        placeholder="Compétences"
                      />
                    )}
                  />
                </div>
                <div className="description">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Description"
                    />
                  </Form.Group>
                </div>

                <div className="skills">
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
                        placeholder="Compétences"
                      />
                    )}
                  />
                </div>
                <div className="description">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Description"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Languages" title="Langues" className="custom-box">
          <div className="GeneralSkillsBox">
            <div className="GeneralSkills">
              <div className="text-right">
                <Link to="#">
                  <Image
                    src="../images/edit_icon.png"
                    className="custom-box-edit-icon"
                  />
                </Link>
              </div>
              <div className="GSkillsBox-2 GSkillsBox">
                <div className="skills-heading">
                Dites-nous vos langues :
                </div>
                <div className="text-left">
                  <div className="skills-heading-line"></div>
                </div>

                <div className="skills">
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
                        placeholder="Langue"
                      />
                    )}
                  />
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
                        placeholder="Niveau"
                      />
                    )}
                  />
                </div>
                <div className="description">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Description"
                    />
                  </Form.Group>
                </div>

                <div className="skills">
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
                        placeholder="Langue"
                      />
                    )}
                  />
                
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
                        placeholder="Niveau"
                      />
                    )}
                  />
                </div>
                <div className="description">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Description"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};
export default Skills;
