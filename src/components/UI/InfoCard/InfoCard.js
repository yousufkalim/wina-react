import React from "react";
import "./InfoCard.css";
import { FiEdit2, MdDelete } from "react-icons/all";
import { DEFAULT_IMAGE } from "../../../Globals/index";
import { baseUri } from "../../../urlConfig";
import { ReactComponent as EditDiploma } from "../../../assets/EditDiploma.svg";
import moment from "moment";

const InfoCard = (props) => {
  const { item, type, EditSchoolModalShow, EditProfessionalCareerModal, EditPermission } = props;
  if (type === "PROFESSIONAL") {
    return (
      <div className="info-card-professional" style={{ borderTop: props.cindex > 0 && "1px solid #C8CFDE" }}>
        <div className="info-card-wrapper">
          <div className="info-card-image-professional">
            <img src={item.image ? `${baseUri}/${item.image}` : DEFAULT_IMAGE} alt="DEFAULT_IMAGE" />
          </div>
          <div className="info-card-container">
            <div className="info-card-title">
              <div>{item.company}</div>

              <div className="modal-icon">
                <EditDiploma onClick={() => EditProfessionalCareerModal(item._id)} className="edit_Icon" />
                <MdDelete className="delete_icon" onClick={props.onDelete} />
              </div>
              <div></div>
            </div>
            <div className="info-card-content pb-3">
              <div className="info-card-content-position">{item.position}</div>
              <h6>
                {moment(item.duration.start_date).format("DD/MM/YYYY")}
                {"  "}
                {moment(item.duration.end_date).format("DD/MM/YYYY")}
              </h6>
            </div>

            <div className="info-card-desc">{item.description}</div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div
        className="info-card"
        // style={{ borderTop: props.cindex > 0 && "1px solid #F7C40D" }}
      >
        <div className="info-card-wrapper">
          <div className="info-card-image">
            <img src={item.image ? `${baseUri}/${item.image}` : DEFAULT_IMAGE} alt="DEFAULT_IMAGE" />
          </div>
          <div className="info-card-container">
            <div className="info-card-title">
              <div>{item.school}</div>
              {EditPermission && EditPermission == "true" ? (
                <div className="modal-icon-2">
                  <EditDiploma onClick={() => EditSchoolModalShow(item._id)} className="edit_Icon" style={{ width: "3.5rem" }} />
                  <MdDelete className="delete_icon" onClick={props.onDelete} />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="info-card-content pb-1">
              <div>
                {moment(item.start_Date).format("DD/MM/YYYY")} {moment(item.end_Date).format("DD/MM/YYYY")}
              </div>
            </div>

            <div className="info-card-desc">{item.description}</div>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;
