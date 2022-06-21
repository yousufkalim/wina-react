import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "1.375rem",
    width: "100%",
    "& .MuiFormLabel-root": {
      fontSize: "1.375rem",
      color: "#8d8d8d",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 11, 38, 0.1)",
    },
    "& .MuiInputBase-root": {
      borderRadius: 5,
      fontSize: "1.375rem",
    },
  },
  label: {
    fontSize: "1.1rem",
    color: "#192646",
    fontWeight: 400,
  },
});

const CustomTextField = (props) => {
  const classes = useStyles();
  return (
    <>
        <label className={`text-left ${classes.label}`}>{props.Label}</label>
      <TextField
        className={classes.root}
        id="outlined-basic"
        // onChange={(e) => props.onChange(e)}
        // value={props.value}
        {...props}
        // label={props.label}
        // variant={props.variant}
      />
    </>
  );
};

export default CustomTextField;
