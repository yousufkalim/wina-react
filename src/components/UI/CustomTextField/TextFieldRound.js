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
      borderRadius: "3.4rem",
      fontSize: "1.375rem",
    //   borderColor: "#fff"
    },

    '& .MuiOutlinedInput-notchedOutline':{
        borderColor: "#2879d9",
      },
  },
});

const TextFieldRound = (props) => {
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

export default TextFieldRound;
