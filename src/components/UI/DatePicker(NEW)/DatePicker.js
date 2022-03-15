import React from "react";
import { registerLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enGb from "date-fns/locale/fr";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
registerLocale("en-gb", enGb);
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  datepicker: {
    border: "0.1px solid rgba(0, 0, 0, 0.23)",
    padding: "12px 7px",
    width: "100%",
    borderRadius: "3.5rem",
    color: "#454545",
    fontSize: "1.3rem",
    borderColor: "#2879d9",

    "&:focus-visible": {
      outline: "none !important",
    },
  },
  label: {
    fontSize: "1.2rem",
    color: "#8D8D8D",
    fontWeight: 400,
  },
}));
export default function DatePiker(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <label className={`text-left ${classes.label}`}>{props.label}</label>
        <DatePicker
          selected={props.selected}
          ang="fr-CA"
          id="date"
          placeholderText={"dd/mm/yyyy"}
          locale={"en-gb"}
          name={props.name}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          className={classes.datepicker}
          autoComplete="off"
          adjustDateOnChange
          showYearDropdown
          yearDropdownItemNumber={12}
          showMonthDropdown
          showTimeSelect={props.showTimeSelect}
          timeFormat="HH:mm"
          timeIntervals={10}
          timeCaption="time"
          dropdownMode="scroll"
          todayButton={"Aujourd'hui."}
          InputLabel={{
            shrink: true,
          }}
        />
      </div>
    </>
  );
}
