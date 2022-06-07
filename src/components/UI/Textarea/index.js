import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(219, 232, 255,0.3) !important",
    border: "none",
    "& .MuiFormLabel-root": {
      fontSize: "1.rem",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "none !important",
    },
    "& .MuiAutocomplete-inputRoot": {
      // borderBottom: "1px solid #f7c40d",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink",
        // - Set the Input border
      },
      "&:hover": {
        borderColor: "none", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "none",
      },
    },
    "& .MuiAutocomplete-inputRoot:hover": {
      borderColor: "none",
    },
    "&::placeholder": {
      color: "#8D8D8D",
      fontSize: "1rem",
    },
    borderColor: "none",
    color: "#454545",
  },
  label: {
    fontSize: "1.375rem",
    color: "#8D8D8D",
    fontWeight: 400,
  },
});
export default function Textarea(props) {
  const classes = useStyles();
  return (
    <div className="form-group">
      {props.label && <div className={classes.label}>{props.label}</div>}
      <textarea
        className={`form-control ${classes.root}`}
        style={props.grey && { borderColor: "#454545" }}
        id="exampleFormControlTextarea1"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        rows={props.row ? props.row : 5}
        columns={props.column}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}
