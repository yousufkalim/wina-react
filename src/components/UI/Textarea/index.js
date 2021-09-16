import React from "react";

export default function Textarea(props) {
  return (
    <div className="form-group">
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        rows={props.row ? props.row : 3}
        columns={props.column}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}
