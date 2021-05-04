import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { MdLocationOn } from "react-icons/all"
import { Link } from "react-router-dom"
import { DEFAULT_IMAGE } from "../../../../../Globals"
export default function RecipeReviewCard(props) {
  const { cards, handleDetail } = props

  return (
    <div className="offer-card">
      <div className="offer-card-wrapper">
        <div className="offer-card-header">
          <img
            src={
              // cards.professional_Picture.image
              //   ? `${baseUri}/views/uploads/${cards.professional_Picture.image}`
              //   :
              DEFAULT_IMAGE
            }
            className="offer-card-img"
          />
        </div>
        <div className="offer-card-body offer-card-body-1">
          <div className="offer-card-description">{cards.title}</div>
          <div className="offer-card-content">
            <span>
              <MdLocationOn />
            </span>{" "}
            {cards.company.address.street},{cards.company.address.zip}{" "}
            {cards.company.address.city}
          </div>
          <div className="offer-card-price text-center">
            <div className="offer-card-price-item">{cards.domain}</div>
            <div className="offer-card-price-item mx-1">{cards.duration}</div>
            <div className="offer-card-price-item">
              {cards.levelOfEducation}
            </div>
          </div>
        </div>
        <div className="offer-card-overlay"></div>
      </div>
      <Link onClick={() => handleDetail(cards._id)} className="offer-card-btn">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  )
}
