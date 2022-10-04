import * as React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles({
  root: {
    display:"flex",
  
      color: "#454545",
      fontWeight: 500,
      marginBottom: "10px",
      fontSize: '1.5rem',
      marginRight: '1rem'

  },
  radio: {
    '& .MuiTypography-root': {
      color: "#454545"
    },
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: "#2879d9"
    }
  }
})
export default function ControlledRadioButtonsGroup(props) {

  const classes = useStyle();
  return (
    <div component="fieldset" className="d-flex align-items-center">
      <div className={classes.root}>{props.label}</div>
      <RadioGroup
        row
        className={classes.radio}
        aria-label="gender"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.length > 0
          ? props.options.map((rod) => (
              <FormControlLabel
                value={rod.title}
                control={<Radio />}
                label={rod.title}
              />
            ))
          : ""}
      </RadioGroup>
    </div>
  );
}
