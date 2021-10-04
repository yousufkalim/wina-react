import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: "1.375rem",
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: "#2879d9"
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
        borderColor: "#2879d9", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "#2879d9",
      },
    },
    '& .MuiAutocomplete-inputRoot:hover':{
      borderColor: "#2879d9"
    }

  }
})
export default function Textarea(props) {
  const classes = useStyles();
  return (
    <div className="form-group">
      <textarea
        className={`form-control ${classes.root}`}
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
