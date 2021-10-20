import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { MdLocationOn } from "react-icons/all";
import { Link } from "react-router-dom";
import { DEFAULT_IMAGE } from "../../../../../Globals";
import { baseUri } from "../../../../../urlConfig";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiSvgIcon-root:focus": {
      outline: "none",
    },
  },
});
export default function RecipeReviewCard(props) {
  const { cards, handleDetail } = props;

  const classes = useStyles();
  return (
    <div className="carosoulDiv">
      <div className="offer-card">
        <div className="offer-card-wrapper">
          <div className="offer-card-header">
            {cards.score && cards.score * 100 > 0 ? (
              <div className="student-offer-detail-percentage">
                {Math.floor(cards.score * 100)}%
              </div>
            ) : (
              ""
            )}
            <img
              src={
                cards.photo.image
                  ? `${baseUri}/${cards.photo.image}`
                  : DEFAULT_IMAGE
              }
              className="offer-card-img"
            />
            {cards.score > 1 && Math.floor(cards.score)}
          </div>
          <div className="offer-card-body offer-card-body-1">
            <div className="offer-card-description">{cards.company.name}</div>
            <div className="offer-card-content">
              <span>
                <MdLocationOn />
              </span>{" "}
              {cards.company.address.street},{cards.company.address.zip}{" "}
              {cards.company.address.city}
            </div>
            <div className="offer-card-price text-center">
              <div className="offer-card-price-item offer-card-price-item-1">
                Domaine : {cards.domain}
              </div>
              <div className="offer-card-price-item offer-card-price-item-2 mx-1">
                Durée : {cards.duration}
              </div>
              <div className="offer-card-price-item offer-card-price-item-3">
                Niveau d’étude : {cards.levelOfEducation}
              </div>
            </div>
          </div>
        </div>
        <div className="offer-card-overlay"></div>
        <Fab
          onClick={() => handleDetail(cards._id)}
          color="primary"
          className={classes.root}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
