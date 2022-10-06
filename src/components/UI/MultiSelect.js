import React, {
  useState
  // , useEffect 
} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    "& .MuiAutocomplete-tag": {
      background: "#f6c40d",
      color: "#fff",
      "& .MuiChip-deleteIcon": {
        color: "#fff",
      },
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.375rem",
      color: "#2E7BD6",
      fontWeight: 400,
      "& .Mui-focused": {
        // color: "#2879d9"
      },
    },
    // "& .MuiFormLabel-root.Mui-focused": {
    //   color: "#2879d9"
    // },
    "& .MuiInputBase-root": {
      fontSize: "1.375rem",
    },
    "& .MuiIconButton-root": {
      color: "#454545",
    },
    "& MuiSelect-icon": {
      color: "#454545",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2879d9",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "3.5rem",
    },

    "& .MuiAutocomplete-inputRoot": {
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
  },
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function AutoComplete({
  formik,
  placeholder,
  onChange,
  items,
  loading,
  onSubmit,
  name,
  multiSelect,
  setQuery,
  query,
}) {
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const classes = useStyle();
  return (
    <>
      <Autocomplete
        className={classes.root}
        id={name}
        key={multiSelect}
        name={name}
        disableCloseOnSelect
        multiple
        noOptionsText={placeholder}
        onOpen={formik.handleBlur}
        loading={loading}
        onChange={(event, value) => {
          onSubmit(value);
        }}
        options={items}
        getOptionLabel={(option) => {
          setSelectedBoxes(option);
          return option.skillField;
        }}
        getOptionSelected={(option, value) => {
          return option.skillField === value.skillField;
        }}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.skillField}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Search input"
            name={name}
            margin="normal"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onBlur={onBlur}
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
            label={placeholder}
          />
        )}
      />
      <div>{selectedBoxes._skillField}</div>
    </>
  );
}
