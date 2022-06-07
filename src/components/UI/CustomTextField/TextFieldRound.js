import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  label: {
    fontSize: "1.2rem",
    color: "black",
    fontWeight: 400,
  },
  root: {
    fontSize: "1.5rem !important",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    // "& .MuiFormLabel-root": {
    //   fontSize: "1.375rem",
    // },
    // "& .MuiInputBase-root": {
    //   borderRadius: "3.4rem",
    //   fontSize: "1.375rem",
    //   //   borderColor: "#fff"
    // },

    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#2879d9",
    // },
    "& .MuiInputBase-input": {
      backgroundColor: "rgb(219, 232, 255,0.3) !important",
    },
  },
});

const TextFieldRound = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <label className={`text-left ${classes.label}`}>{props.label}</label>
        <TextField
          variant="filled"
          className={classes.root}
          className1={props.className1}
          id="filled-basic"
          placeholder={props.placeholder}
          // onChange={(e) => props.onChange(e)}
          // value={props.value}
          {...props}
          // label={props.label}
          // variant={props.variant}
        />
      </div>
    </>
  );
};

export default TextFieldRound;
