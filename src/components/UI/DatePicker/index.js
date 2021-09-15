import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from 'moment'
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <label>{props.label}</label>
        {props.previous && props.previous === true ?
          <input
            id="date"
            name={props.name}
            // label="Birthday"
            type="date"
            value={props.value}
            onChange={props.onChange}
            min={moment(new Date()).format("YYYY-MM-DD")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          :



          <input
            id="date"
            name={props.name}
            // label="Birthday"
            type="date"
            value={props.value}
            onChange={props.onChange}
            min={moment(new Date()).format("YYYY-MM-DD")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
      </div>
    </>
  );
}
