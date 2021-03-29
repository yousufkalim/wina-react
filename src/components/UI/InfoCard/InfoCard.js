import React from "react";
import "./InfoCard.css";
import { FiEdit2 } from "react-icons/all";

const InfoCard = (props) => {
  const { item } = props;
  return (
    <div
      className="info-card"
      style={{ borderTop: props.cindex > 0 && "1px solid #F7C40D" }}
    >
      <div className="info-card-wrapper">
        <div className="info-card-image">
          {item.image && <img src={`../images/${item.image}.png`} />}
        </div>
        <div className="info-card-container">
          <div className="info-card-title">
            <div>{item.title}</div>
            <div>
              <FiEdit2 />
            </div>
          </div>
          <div className="info-card-content pb-3">
            <div>{item.duration}</div>
            <div>{item.location}</div>
          </div>

          <div className="info-card-desc">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
