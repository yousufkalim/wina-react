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
    border:' 0.1px solid rgba(0, 0, 0, 0.23)',
    padding: '12px 7px',
    width: '100%',
    borderRadius: '4px',
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <label className="text-left">{props.label}</label>
        {props.previous && props.previous === true ?
          <input
            id="date"
            name={props.name}
            // label="Birthday"
            type="date"
            value={props.value}
            onChange={props.onChange}
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
