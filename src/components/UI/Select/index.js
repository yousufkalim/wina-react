import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { OutlinedInput } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import moment from "moment";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width: "100%",
    border: "none",
    "& .MuiSelect-selectMenu": {
      borderRadius: "3.4rem",
    },
    "& .MuiSelect-select:focus": {
      background: "transparent",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      borderColor: "#000B26 !important",

      "& .MuiIconButton-root": {
        color: "#454545",
      },
      "& MuiSelect-icon": {
        color: "#454545",
      },
      // borderBottom: "1px solid #f7c40d",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink",
        // - Set the Input border
      },
      // "&:hover": {
      //   borderColor: "#2879d9", // - Set the Input border when parent has :hover
      // },
      // "&.Mui-focused fieldset": {
      //   // - Set the Input border when parent is focused
      //   borderColor: "#2879d9",
      // },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 11, 38, 0.1)",
    },
    // "& .MuiFormLabel-root.Mui-focused": {
    //   color: "#2879d9"
    // },
    "& .MuiFormLabel-root": {
      fontSize: "1.37rem",
      color: "#8d8d8d",
    },
    "& .MuiInputLabel-formControl": {
      top: -6,
      left: 15,
    },
    "& .MuiInputLabel-shrink": {
      top: "-6px",
      center: 0,
      // width: '133.33%',
    },
    "& .MuiInputBase-root ": {
      fontSize: "1.375rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 11, 38, 0.1)",
    },
  },
  formControlGrey: {
    // margin: theme.spacing(1),
    width: "100%",
    border: "none",
    "& .MuiOutlinedInput-root": {
      borderRadius: "3.5rem",
      borderColor: "#2879d9",
      // borderBottom: "1px solid #f7c40d",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink",
        // - Set the Input border
      },
      // "&:hover": {
      //   borderColor: "#2879d9", // - Set the Input border when parent has :hover
      // },
      // "&.Mui-focused fieldset": {
      //   // - Set the Input border when parent is focused
      //   borderColor: "#2879d9",
      // },
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2879d9",
    },
    // "& .MuiFormLabel-root.Mui-focused": {
    //   color: "#2879d9"
    // },
    "& .MuiFormLabel-root": {
      fontSize: "1.37rem",
      color: "#8D8D8D",
      // fontWeight: 600,
    },
    "& .MuiInputLabel-formControl": {
      top: -6,
      left: 15,
    },
    "& .MuiInputLabel-shrink": {
      top: "-6px",
      center: 0,
      // width: '133.33%',
    },
    "& .MuiInputBase-root ": {
      fontSize: "1.375rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2879d9",
    },
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2879d9",
      },
    },
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  if (props.type && props.type === "skills") {
    return (
      <>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            open={open}
            onClose={handleClose}
            className={classes.textField}
            onOpen={handleOpen}
            name={props.name}
            variant="outlined"
            InputLabelProps={{ style: { fontSize: 40 } }}
            label={props.label}
            // input={<OutlinedInput label={props.label} />}
            value={props.value}
            // MenuProps={MenuProps}
            onChange={props.onChange}
          >
            <MenuItem value="">{props.label}</MenuItem>
            {props.options.length > 0
              ? props.options.map((op) => (
                  <MenuItem key={op._id} value={op._id}>
                    {op.skillField}
                  </MenuItem>
                ))
              : "Aucune donnée disponible"}
            <MenuItem value="other">{props.other ? "other" : ""}</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  } else if (props.type && props.type === "appointment") {
    return (
      <>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            open={open}
            InputLabelProps={{ style: { fontSize: 40 } }}
            onClose={handleClose}
            label={props.label}
            onOpen={handleOpen}
            // input={<OutlinedInput label={props.label} />}
            name={props.name}
            variant="outlined"
            // MenuProps={MenuProps}
            value={props.value}
            onChange={props.onChange}
          >
            <MenuItem value="">{props.label}</MenuItem>
            {props.options && props.options.length > 0
              ? props.options &&
                props.options.map((op, i) => (
                  <MenuItem key={i} value={op}>
                    {moment(new Date(op)).format("DD/MM/YYYY HH:SS")}
                  </MenuItem>
                ))
              : ""}
            <MenuItem value="I am not available at the proposed time">I am not available at the proposed time</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  } else
    return (
      <>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            InputLabelProps={{ style: { fontSize: 40 } }}
            variant="outlined"
            label={props.label}
            name={props.name}
            // MenuProps={MenuProps}
            // input={<OutlinedInput label={props.label} />}
            value={props.value}
            onChange={props.onChange}
          >
            <MenuItem value="">{props.label}</MenuItem>
            {props.options.length > 0
              ? props.options.map((op, index) => (
                  <MenuItem key={index} value={op.title}>
                    {op.title}
                  </MenuItem>
                ))
              : "Aucune donnée disponible"}
          </Select>
        </FormControl>
      </>
    );
}
