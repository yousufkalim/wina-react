import React from "react";
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
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const GeneralInformationsModal = ({ show, setShow }) => {
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
      className="custom-modal"
      onHide={() => setShow(false)}
      dialogClassName="schoolDiplomaModal"
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Formation / École
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Autocomplete
          //   multiple
          id="checkboxes-tags-demo"
          className="schoolName"
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
              placeholder="École"
            />
          )}
        />
        <div className="startDate">
          <label>Date de début</label>
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
        <div className="endDate">
          <label>Date de fin</label>
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
        <div className="description">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>

        <Button className="Enregistrer" variant="primary">
          Enregistrer
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default GeneralInformationsModal;

/* eslint-disable no-use-before-define */

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
