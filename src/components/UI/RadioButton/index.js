import * as React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles({
  root: {
    '& .MuiFormLabel-root': {
      fontSize: '1.6rem',
    },
    '& .MuiTypography-root': {
      fontSize: '1.5rem'
    }
  }
})
export default function ControlledRadioButtonsGroup(props) {

  const classes = useStyle();
  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">{props.label}</FormLabel>
      <RadioGroup
        row
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
    </FormControl>
  );
}
