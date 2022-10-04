import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import moment from "moment";
// import { registerLocale } from "react-datepicker";
// import enGb from "date-fns/locale/fr";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  textField: {
    border: "0px",
    padding: "12px 7px",
    width: "100%",
    borderRadius: "5px",
    color: "#797D85",
    fontSize: "1.2rem",
    borderColor: "#2879d9",
    backgroundColor: "rgb(219, 232, 255,0.3) !important",

    "&:focus-visible": {
      outline: "none !important",
    },
  },
  label: {
    fontSize: "1.2rem",
    color: "#192646",
    fontWeight: 400,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <label className={`text-left ${classes.label}`}>{props.label}</label>
        {props.previous && props.previous === true ? (
          <input
            id="date"
            name={props.name}
            disabled={props.disabled}
            type="date"
            value={props.value}
            onChange={props.onChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        ) : (
          <input
            id="date"
            name={props.name}
            disabled={props.disabled}
            type="date"
            value={props.value}
            onChange={props.onChange}
            min={moment(new Date()).format("YYYY-MM-DD")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      </div>
    </>
  );
}
