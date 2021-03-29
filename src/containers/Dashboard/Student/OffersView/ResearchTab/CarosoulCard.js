import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {MdLocationOn} from 'react-icons/all';
import {Link} from 'react-router-dom';



export default function RecipeReviewCard(props) {
  
  const {cards, isDetailPage} = props;

  return (
    <div className="offer-card">
      <div className="offer-card-wrapper">
        <div className="offer-card-header">
          <img src={`../images/${cards.image}.png`} className="offer-card-img" />
        </div>
        <div className="offer-card-body offer-card-body-1">
          <div className="offer-card-description">{cards.title}</div>
          <div className="offer-card-content">
            <span><MdLocationOn /></span> {cards.location}
          </div>
          <div className="offer-card-price text-center">
            <div className="offer-card-price-item">{cards.content1}</div>
            <div className="offer-card-price-item mx-1">{cards.content2}</div>
            <div className="offer-card-price-item">{cards.content3}</div>
          </div>
        </div>
        <div className="offer-card-overlay"></div>
      </div>
      <Link onClick={() =>isDetailPage(true)} className="offer-card-btn">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
