import React, { useState, useEffect } from "react";
import "./CardWithImage.css";
import { Button, makeStyles } from "@material-ui/core";
import CardItem from "./OfferCardItem";
import DoneIcon from "@material-ui/icons/Done";
import Calendar from "react-calendar";
import { ImLocation } from "react-icons/all";

const useStyles = makeStyles({
  root1: {
    "&:hover": {
      backgroundColor: "#F6C40D",
    },
    "&:focus": {},
    background: "#F6C40D",
    borderRadius: "2.56rem",
    border: 0,
    fontSize: "1.12rem",
    fontWeight: "bold",
    color: "white",
    height: "2.5rem",
    padding: "0 3rem",
  },
  root2: {
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
    fontSize: "1.12rem",
    fontWeight: "bold",
    color: "white",
    height: "2.5rem",
    padding: "0 3rem",
  },
  rootGray: {
    "&:hover": {
      backgroundColor: "#AAAAAA",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    background: "#AAAAAA",
    borderRadius: "2.56rem",
    border: 0,
    fontSize: "1.12rem",
    fontWeight: "bold",
    color: "white",
    height: "2.5rem",
    padding: "0 50px",
  },
  root3: {
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
    fontSize: "1.12rem",
    fontWeight: "bold",
    color: "white",
    height: "2.5rem",
    padding: "0 50px",
  },
  root4: {
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
    height: "3rem",
    padding: "0.6rem 3rem",
  },
  label: {
    textTransform: "capitalize",
  },
});

const CardWithImage = (props) => {
  const classes = useStyles();
  const { item, setDetailHandler } = props;

  const [learn, setLearn] = useState(false);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setLearn(false);
  }, []);

  const learnHandler = (btn) => {
    setLearn(btn);
  };

  return (
    <div className="card-with-image">
      <div className="card-with-image-wrapper">
        <div className="card-with-image-image">
          {item.image && <img src={`../images/${item.image}.png`} />}
        </div>
        <div className="card-with-image-container">
          <div className="card-with-image-title">
            <div>{item.title}</div>
            {item.cdate && (
              <div className="card-with-image-date">{item.cdate}</div>
            )}
          </div>
          <div className="card-with-image-content text-left">
            {item.content}
            <br />
            <p className="card-with-image-location">
              <span className="mr-2">
                <ImLocation className="card-with-image-location-icon" />
              </span>
              {item.location}
            </p>
          </div>

          <div className="card-with-image-desc">
            {item.desc1 && (
              <CardItem
                className="offer-card-item-bordered company-offer-detail-content"
                content={item.desc1}
              />
            )}
            {item.desc2 && (
              <CardItem
                className="offer-card-item-bordered company-offer-detail-content"
                content={item.desc2}
              />
            )}
            {item.desc3 && (
              <CardItem
                className="offer-card-item-bordered company-offer-detail-content"
                content={item.desc3}
              />
            )}
          </div>

          <div className="card-with-image-buttons">
            {item.btn1 && (
              <div
                onClick={() => setDetailHandler(true)}
                className="card-with-image-btn card-with-image-btn-yellow"
              >
                {item.btn1}
              </div>
            )}
            {item.btn2 ? (
              <div className="card-with-image-btn card-with-image-btn-green">
                {item.btn2}
              </div>
            ) : (
              item.btn2Gray && (
                <div className="card-with-image-btn card-with-image-btn-gray">
                  {item.btn2Gray}
                </div>
              )
            )}
            {item.btn3 && (
              <div className="card-with-image-btn card-with-image-btn-red">
                {item.btn3}
              </div>
            )}
          </div>
        </div>
      </div>
      {item.calender && (
        <div className="card-with-image-calender-container">
          <div className="card-with-image-calender-wrapper">
            <div className="card-with-image-calender-heading">
              Félicitations vous avez accepté le match !
            </div>
          </div>

          <div className="card-with-image-calender-wrapper">
            <div className="card-with-image-calender">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="text-right">
            <Button
              classes={{
                root: classes.root4,
                label: classes.label,
              }}
            >
              Envoyer
            </Button>
          </div>
        </div>
      )}
      {item.matches && <div className="matches">{item.matches}</div>}
    </div>
  );
};

export default CardWithImage;
