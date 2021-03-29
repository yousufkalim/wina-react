import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/all";
import { Row, Col, Dropdown, Form } from "react-bootstrap";
import { Button, makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardItem from "../../../../../../components/UI/CardWithImage/OfferCardItem";
import "./CompanyCardDetail.css";
import { FaTimes } from "react-icons/all";
import CardWithImage from "../../../../../../components/UI/CardWithImage/CardWithImage";

const overviewOffers = [
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn2: "Matcher",
    btn3: "Refuser",
    matches: "90%",
  },
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn2: "Matcher",
    btn3: "Refuser",
    matches: "90%",
  },
  {
    image: "company-offer-card",
    title: "Excellent",
    content: "Marketing/Communication",
    location: "4 Rue du Général de Larminat - 75015 Paris",
    desc1: "Domaine : Webdesign",
    desc2: "Durée : 1 an",
    desc3: "Niveau d’étude : Brevet",
    btn1: "En savoir plus",
    btn2: "Matcher",
    btn3: "Refuser",
    matches: "90%",
  },
];

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
  root1: {
    "&:hover": {
      backgroundColor: "#3CBF31",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    background: "#3CBF31",
    borderRadius: "2.56rem",
    border: 0,
    fontSize: "1.37rem",
    fontWeight: "bold",
    color: "white",
    height: "3.7rem",
    padding: "0 3.6rem",
  },
  root2: {
    "&:hover": {
      backgroundColor: "#2879D9",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    background: "#2879D9",
    borderRadius: "2.56rem",
    border: 0,
    fontSize: "1.37rem",
    fontWeight: "bold",
    color: "white",
    height: "3.7rem",
    padding: "0 3.6rem",
  },

  label: {
    textTransform: "capitalize",
  },
});

const CompanyCardDetail = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(30);
  const [show, setShow] = useState(true);
  const [isnext, setIsNext] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleShow = () => {
    setShow(false);
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

  useEffect(() => {
    setIsNext(false);
  }, []);

  return (
    <div className="company-card-detail text-center">
      <div className="company-card-detail-container">
        {isnext === false ? (
          <div className="company-card-detail-wrapper">
            {!props.isPerc && (
              <div className="student-offer-detail-percentage">90%</div>
            )}
            <div className="offer-detail-header">
              <div className="offer-detail-header-image text-right">
                <img src={`../images/offer-card-detail.png`} />
              </div>
              {/* <div className="offer-detail-line"></div> */}
              <div className="offer-detail-header-text text-left offer-detail-header-line">
                Store & Supply
              </div>
            </div>

            <div className="offer-detail-date-container">
              <div className="offer-detail-location text-right">
                <span>
                <MdLocationOn className="offer-detail-location-icon" />
                </span>{" "}
                4 Rue du Général de Larminat - 75015 Paris
              </div>
            </div>

            <div className="offer-detail-content">
              <CardItem
                className="offer-card-item-bordered offer-detail-content-detail text-center"
                content="Marketing/Communication"
              />
              <CardItem
                className="offer-card-item-bordered offer-detail-content-detail text-center"
                content="Niveau d’étude : Brevet"
              />
            </div>

            <div className="company-card-detail-date-headings">
              <div className="company-card-detail-date-heading text-left">
                Date de début
              </div>
              <div className="company-card-detail-date-heading text-left">
                Durée
              </div>
            </div>
            <div className="company-card-detail-date-container">
              <Dropdown className="custom-dropdown date-dropdown">
                <Dropdown.Toggle id="dropdown-basic">2020</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2023</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="custom-dropdown date-dropdown">
                <Dropdown.Toggle id="dropdown-basic">1 an</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">2 an</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">3 an</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4 an</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Row>
                <Col className="col-lg-12">
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

            <div className="company-card-detail-date-container">
              <Dropdown className="custom-dropdown skills-dropdown">
                <Dropdown.Toggle id="dropdown-basic">
                  Compétences générales
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">2 an</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">3 an</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4 an</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="offer-detail-date-container">
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
            times
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
            times
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
            times
          />
        </div>
            <div className="company-card-detail-description">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>
            </div>

            <div className="company-card-detail-date-container">
              <Dropdown className="custom-dropdown skills-dropdown">
                <Dropdown.Toggle id="dropdown-basic">
                  Compétences générales
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">2 an</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">3 an</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4 an</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="offer-detail-date-container">
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
            times
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
            times
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
            times
          />
        </div>

            <div className="company-card-detail-description">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>
            </div>

            <div className="company-card-detail-buttons-container">
              <Button
                classes={{
                  root: classes.root1,
                  label: classes.label,
                }}
              >
                Consulter les matchs conseiller (13)
              </Button>
              <Button
                onClick={() => setIsNext(true)}
                classes={{
                  root: classes.root2,
                  label: classes.label,
                }}
              >
                Modifier
              </Button>
            </div>
          </div>
        ) : (
          overviewOffers.map((item, index) => (
            <CardWithImage key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default CompanyCardDetail;
