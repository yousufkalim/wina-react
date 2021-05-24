import React from "react";
import classnames from "classnames";
import { FaTimes } from "react-icons/all";

const CardItem = (props) => {
	return (
		<div
			className={`${classnames(props.className)} d-flex justify-content-center`}
		>
			<div>{props.content}</div>
			{props.times && (
				<span onClick={() => props.handleDelete(props.id)}>
					<FaTimes className="card-item-cancel-icon" />
				</span>
			)}
		</div>
	);
};

export default CardItem;
