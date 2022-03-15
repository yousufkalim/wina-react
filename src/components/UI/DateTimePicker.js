import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import TextField from "@material-ui/core/TextField"
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr"; 
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css"
import { NoEncryption } from "@material-ui/icons";
registerLocale("fr", fr); 
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    height:30,
    width: 170,
    border: "1px solid black",
    borderRadius:"3px",
    borderWidth:"0px 0px 2px 0px"
  },
}));
export default function DateAndTimePickers(props) {
  const classes = useStyles();
  // "2017-05-24T10:30"


  return (
    <form className={classes.container} noValidate>
      <DatePicker
        todayButton={"Aujourd'hui."}
        timeCaption="Temps"
        locale="fr"
        showPopperArrow={true}
        dateFormat="dd-mm-yyyy hh:mm"
        name={props.name}
        label={props.label}
        popperPlacement="bottom-start"
        selected={props.dateValue}
        className={classes.textField}
        showYearDropdown
        showTimeSelect
        placeholderText={"dd/mm/yyyy"}
        onChange={props.onChange}
        timeIntervals={30}
      />
      {/* <TextField
        lang="fr-CA"
        id="datetime-local"
        name={props.name}
        label={props.label}
        type="datetime-local"
        value={props.value}
        onChange={props.onChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
    </form>
  );
}
