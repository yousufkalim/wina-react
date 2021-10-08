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
    borderRadius: '3.5rem',
    color: "#454545",
    fontSize: '1.3rem',
    borderColor: "#2879d9",

    '&:focus-visible': {
      outline: "none !important"
    }
  },
  label: {
    fontSize: '1.2rem',
    color: '#8D8D8D',
    fontWeight: 400,
  }
}));

export default function DatePickers(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <label className={`text-left ${classes.label}`}>{props.label}</label>
        {props.previous && props.previous === true ?
          <input
            id="date"
            name={props.name}
            // label="Birthday"
            type="date"
            // placeholder="startDate"
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
            // placeholder="startDate"
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
