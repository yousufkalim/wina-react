import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "1.375rem",
    width: "100%",
    "& .MuiFormLabel-root": {
      fontSize: "1.375rem",
    },
    "& .MuiInputBase-root": {
      borderRadius: 10,
      fontSize: "1.375rem",
    },
  },
});

const CustomTextField = (props) => {
  const classes = useStyles();
  return (
    <>
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
