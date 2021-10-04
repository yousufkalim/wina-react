import React from "react";
import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root1: {
    "&:hover": {
      backgroundColor: "#2879D9",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    background: "#2879D9",
    borderRadius: "2.56rem",
    border: 0,
    fontSize: "1.37rem",
    fontWeight: "bold",
    color: "white",
    height: "3.7rem",
    padding: "0 3.6rem",
  },
})

export default function CustomButton(props) {

  const classes = useStyles();
  return (
    <Button
      className={classes.root1}
      type={props.type}
      variant={props.variant}
      onClick={props.onClick}
      // style={{borderRadius: "3.5rem", fontSize: '1.37rem', backgroundColor: "#2879D9", color: "#fff"}}
      disabled={props.disabled}
    >
      {props.value}
    </Button>
  );
}
