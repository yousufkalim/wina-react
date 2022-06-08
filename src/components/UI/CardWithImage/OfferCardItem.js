import React from "react";
import classnames from "classnames";
import { FaTimes } from "react-icons/all";

const CardItem = (props) => {
	return (
    <div className={`${classnames(props.className)} d-flex justify-content-center`}>
      <div>
        {props.title}
        {props.content}
      </div>
      {props.times && (
        <span style={{ marginLeft: "7%" }} onClick={() => props.handleDelete(props.id)}>
          <FaTimes
            // style={{ marginLeft: "5rem" }}
            className="card-item-cancel-icon"
          />
        </span>
      )}
    </div>
  );
};

export default CardItem;
