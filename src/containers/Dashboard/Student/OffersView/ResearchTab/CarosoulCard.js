import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { MdLocationOn } from "react-icons/all";
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
                {Math.floor(cards.score * 100) > 100 ? "98" : Math.floor(cards.score * 100)}%
              </div>
            ) : (
              ""
            )}
            <img src={cards.photo.image ? `${baseUri}/${cards.photo.image}` : DEFAULT_IMAGE} alt="" className="offer-card-img" />
          </div>
          <div className="offer-card-body">
            <div className="offer-card-content">
              <p className="offer-card-company-postion">Position: {cards?.position}</p>
            </div>

            <div className="offer-card-content">
              <p className="offer-card-company-name">Entreprise: {cards?.company.name}</p>
            </div>
            <div className="offer-card-content">
              <p className="offer-card-company-name">
                <span>
                  <MdLocationOn className="offer-card-location-logo" />
                </span>
                {cards?.company?.address?.street},{cards?.company?.address?.zip} {cards?.company?.address?.city}
              </p>
            </div>
          </div>
        </div>
        <div className="offer-card-overlay"></div>
        <Fab onClick={() => handleDetail(cards?._id)} color="primary" className={classes.root} aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
