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

const PPModal = ({ show, setShow }) => {
  // const classes = useStyles();
  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const schoolName = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];
  const startDate = [
    { title: "1994" },
    { title: "1972" },
    { title: "1974" },
    { title: "2008" },
  ];
  const endDate = [
    { title: "1994" },
    { title: "1972" },
    { title: "1974" },
    { title: "2008" },
  ];
  return (
    <Modal
      show={show}
      className="custom-modal-big"
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
        <div className="professional-modal-first">
          <Form.Control
            type="text"
            placeholder="Intitulé du poste . Ex : Chef de projet"
            className="Job_title"
          />

          <div className="Type_of_employment">
            <Autocomplete
              //   multiple
              id="checkboxes-tags-demo"
              className="Type_of_employment"
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
                  placeholder="Type d’emploi"
                />
              )}
            />
          </div>

          <div className="Business">
            <Autocomplete
              // multiple
              id="checkboxes-tags-demo"
              options={startDate}
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
                  // label="Date de début"
                  placeholder="Année"
                />
              )}
            />
          </div>

          <div className="Location">
            <Autocomplete
              // multiple
              id="checkboxes-tags-demo"
              options={endDate}
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
                  // label="Date de fin"
                  placeholder="Année"
                />
              )}
            />
          </div>
        </div>
        <div className="startEndDateRow professional-modal-second">
         
            <div className="position">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="J’occupe actuellement ce poste"
              />
            </div>
         
          
            <div className="startEndDate">
              <label>Date de début</label>
              <Autocomplete
                //   multiple
                id="checkboxes-tags-demo"
                className="startEndDate"
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
        
          
           
            <div className="startEndDate">
              <Autocomplete
                //   multiple
                id="checkboxes-tags-demo"
                className="startEndDate"
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
          
        
            <div className="startEndDate">
              <label>Date de fin</label>
              <Autocomplete
                //   multiple
                id="checkboxes-tags-demo"
                className="startEndDate"
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
         
          
            
            <div className="startEndDate">
              <Autocomplete
                //   multiple
                id="checkboxes-tags-demo"
                className="startEndDate"
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
        
        </div>
        <div className="description">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>

        <div className="text-right">
        <Button className="Enregistrer" variant="primary">
          Enregistrer
        </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PPModal;

/* eslint-disable no-use-before-define */

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
