import React from "react";
import { MdLocationOn } from "react-icons/all";
import { Row, Col } from "react-bootstrap";
import { Button, makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardItem from "../../../../../components/UI/CardWithImage/OfferCardItem";


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
    padding: "0 3.7rem",
  },
  root2: {
    "&:hover": {
      backgroundColor: "#E52B2B",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    background: "#E52B2B",
    borderRadius: "2.56rem",
    border: 0,
    fontSize: "1.37rem",
    fontWeight: "bold",
    color: "white",
    height: "3.7rem",
    padding: "0 3.7rem",
  },
 
  label: {
    textTransform: "capitalize",
  },
});

const OfferCardDetail = (props) => {
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
    <div className="offer-detail">
      <div className="offer-detail-container">
        <div className="student-offer-detail-percentage">90%</div>
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
            className="offer-card-item-bordered offer-detail-content-detail"
            content="Domaine : Webdesign"
          />
          <CardItem
            className="offer-card-item-bordered offer-detail-content-detail"
            content="Niveau d’étude : Brevet"
          />
        </div>

        <div className="offer-detail-date-headings">
          <div className="offer-detail-date-heading text-left">
            Date de début
          </div>
          <div className="offer-detail-date-heading text-left">Durée</div>
        </div>
        <div className="offer-detail-date-container">
          <CardItem
            className="offer-card-item-bordered offer-detail-date"
            content="2020"
          />
          <CardItem
            className="offer-card-item-bordered offer-detail-date"
            content="1 an"
          />
        </div>

        <Row>
          <Col className="col-lg-12">
            <div className="sliderBox">
              <div className="label">Tranche de salaire</div>
              <div className={(classes.root, "slider")}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Slider
                    disabled 
                    disabledaria-labelledby="disabled-slider"
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


        <div className="offer-detail-date-container">
          <CardItem
            className="offer-card-item-bordered offer-detail-skills-heading"
            content="Compétences générales "
          />
        </div>

        <div className="offer-detail-date-container">
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
          />
        </div>

        <div className="offer-detail-date-container">
          <CardItem
            className="offer-card-item-bordered offer-detail-skills-heading"
            content="Compétences générales "
          />
        </div>

        <div className="offer-detail-date-container">
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
          />
          <CardItem
            className="offer-detail-skills"
            content="Compétences"
          />
        </div>

        <div className="offer-detail-buttons-container">
          <Button
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            Matcher
          </Button>
          <Button
            classes={{
              root: classes.root2, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferCardDetail;
