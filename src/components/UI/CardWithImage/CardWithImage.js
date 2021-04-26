import React, { useState, useEffect } from "react";
import "./CardWithImage.css";
import { Button, makeStyles } from "@material-ui/core";
import CardItem from "./OfferCardItem";
import DoneIcon from "@material-ui/icons/Done";
import Calendar from "react-calendar";
import { ImLocation } from "react-icons/all";
import { DEFAULT_IMAGE } from "../../../Globals";
import { baseUri } from "../../../urlConfig";

const CardWithImage = (props) => {
  const classes = useStyles();
  const {
    item,
    eventKey,
    handleDetail,
    handleOfferRejected,
    handleOfferAccepted,
  } = props;

  const [value, onChange] = useState(new Date());
  if (props.type && props.type === "student") {
    return (
      <div className="card-with-image">
        <div className="card-with-image-wrapper">
          <div className="card-with-image-image">
            {/* {item.image && <img src={`../images/${item.image}.png`} />} */}
            <img
              src={
                item.photo.image
                  ? `${baseUri}/${item.photo.image}`
                  : DEFAULT_IMAGE
              }
            />
          </div>
          <div className="card-with-image-container">
            <div className="card-with-image-title">
              <div>
                <h3>
                  <b>{item.company && item.company.name}</b>
                </h3>
              </div>
              {item.startDate && (
                <div className="card-with-image-date">{item.startDate}</div>
              )}
            </div>
            <div className="card-with-image-content text-left">
              {item.position} <br />
              <p className="card-with-image-location">
                <span className="mr-2">
                  <ImLocation className="card-with-image-location-icon" />
                </span>
                {item.location.street},{item.location.zip} {item.location.city}
              </p>
              <br />
            </div>

            <div className="card-with-image-desc">
              {item.domain && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.domain}
                />
              )}
              {item.duration && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.duration}
                />
              )}
              {item.levelOfEducation && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.levelOfEducation}
                />
              )}
            </div>
            {eventKey === "Suggestion" ? (
              <div className="card-with-image-buttons">
                <div
                  className="card-with-image-btn card-with-image-btn-yellow"
                  onClick={() => handleDetail(item._id)}
                >
                  Voir
                </div>

                <div
                  onClick={() => handleOfferAccepted(item._id, "requested")}
                  className="card-with-image-btn card-with-image-btn-green"
                >
                  Accepter
                </div>

                <div
                  onClick={() => handleOfferRejected(item._id, "rejected")}
                  className="card-with-image-btn card-with-image-btn-red"
                >
                  Refuser
                </div>
              </div>
            ) : eventKey === "RefusedOffers" ? (
              <div className="card-with-image-buttons">
                <div
                  onClick={() => handleDetail(item._id)}
                  className="card-with-image-btn card-with-image-btn-yellow"
                >
                  Voir
                </div>

                <div className="card-with-image-btn card-with-image-btn-gray">
                  Impossible
                </div>
              </div>
            ) : eventKey === "PreSelectedOffers" ? (
              <div className="card-with-image-buttons">
                <div
                  onClick={() => handleDetail(item._id)}
                  className="card-with-image-btn card-with-image-btn-yellow"
                >
                  Voir
                </div>
              </div>
            ) : (
              ""
            )}
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
        {item.score && item.score * 100 > 0 ? (
          item.score * 100 > 50 ? (
            <div className="matches">{item.score * 100}%</div>
          ) : (
            <div className="matches50">{item.score * 100}%</div>
          )
        ) : (
          ""
        )}
      </div>
    );
  } else if (props.type && props.type === "company") {
    return (
      <div className="card-with-image">
        <div className="card-with-image-wrapper">
          <div className="card-with-image-image">
            {/* {item.image && <img src={`../images/${item.image}.png`} />} */}
            <img
              src={
                item.photo.image
                  ? `${baseUri}/${item.photo.image}`
                  : DEFAULT_IMAGE
              }
            />
          </div>
          <div className="card-with-image-container">
            <div className="card-with-image-title">
              <div>
                <h3>
                  <b>{item.company && item.company.name}</b>
                </h3>
              </div>
              {item.startDate && (
                <div className="card-with-image-date">{item.startDate}</div>
              )}
            </div>
            <div className="card-with-image-content text-left">
              {item.position} <br />
              <p className="card-with-image-location">
                <span className="mr-2">
                  <ImLocation className="card-with-image-location-icon" />
                </span>
                {item.location.street},{item.location.zip} {item.location.city}
              </p>
              <br />
            </div>

            <div className="card-with-image-desc">
              {item.domain && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.domain}
                />
              )}
              {item.duration && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.duration}
                />
              )}
              {item.levelOfEducation && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.levelOfEducation}
                />
              )}
            </div>
            {eventKey === "Offres" ? (
              <div className="card-with-image-buttons">
                <div
                  onClick={() => handleDetail(item._id)}
                  className="card-with-image-btn card-with-image-btn-yellow"
                >
                  Voir
                </div>
              </div>
            ) : eventKey === "Matchsent" ? (
              <div className="card-with-image-buttons">
                <div
                  onClick={() => handleDetail(item._id)}
                  className="card-with-image-btn card-with-image-btn-yellow"
                >
                  Voir
                </div>
              </div>
            ) : (
              ""
            )}
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
  } else if (props.type && props.type === "search_student") {
    return (
      <div className="card-with-image">
        <div className="card-with-image-wrapper">
          <div className="card-with-image-image">
            {/* {item.image && <img src={`../images/${item.image}.png`} />} */}
            <img
              src={
                item.professional_Picture.image
                  ? `${baseUri}/views/uploads/${item.professional_Picture.image}`
                  : DEFAULT_IMAGE
              }
            />
          </div>
          <div className="card-with-image-container">
            <div className="card-with-image-title">
              <div>
                <h3>
                  <b>
                    {item.user && item.user.firstName}{" "}
                    {item.user && item.user.lastName}
                  </b>
                </h3>
              </div>
            </div>
            <div className="card-with-image-content text-left">
              {item.positionSought && item.positionSought.position} <br />
              <p className="card-with-image-location">
                <span className="mr-2">
                  <ImLocation className="card-with-image-location-icon" />
                </span>
                {item.user.address.street},{item.user.address.zip}{" "}
                {item.user.address.city}
              </p>
              <br />
            </div>

            <div className="card-with-image-desc">
              {item.positionSought && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.positionSought.domain}
                />
              )}
              {item.positionSought && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.positionSought.duration}
                />
              )}
              {item.positionSought && (
                <CardItem
                  className="offer-card-item-bordered company-offer-detail-content"
                  content={item.positionSought.levelOfEducation}
                />
              )}
            </div>

            <div className="card-with-image-buttons">
              <div
                className="card-with-image-btn card-with-image-btn-yellow"
                onClick={() => handleDetail(item._id)}
              >
                Voir
              </div>

              <div
                onClick={() => handleOfferAccepted(item._id, "accepted")}
                className="card-with-image-btn card-with-image-btn-green"
              >
                Accepter
              </div>

              <div
                onClick={() => handleOfferRejected(item._id, "rejected")}
                className="card-with-image-btn card-with-image-btn-red"
              >
                Refuser
              </div>
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
        {item.score && item.score * 100 > 0 ? (
          item.score * 100 > 50 ? (
            <div className="matches">{Math.round(item.score * 100)}%</div>
          ) : (
            <div className="matches50">{Math.round(item.score * 100)}%</div>
          )
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
};

export default CardWithImage;
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
