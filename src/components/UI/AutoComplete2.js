import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "3.5rem",
      borderColor: "#2879d9",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2879d9",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #f7c40d",
    },

    // '& .MuiFormLabel-root.Mui-focused': {
    //   color: "#2879d9"
    // },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #f7c40d",
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
    "& .MuiFormLabel-root": {
      fontSize: "1.375rem",
      "& .Mui-focused": {
        color: "#fff",
      },
    },

    "& .MuiInputBase-root ": {
      fontSize: "1.375rem",
    },
  },

  root2: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "3.5rem",
      borderColor: "#2879d9",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2879d9",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #f7c40d",
    },

    // '& .MuiFormLabel-root.Mui-focused': {
    //   color: "#2879d9"
    // },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #f7c40d",
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
    "& .MuiFormLabel-root.Mui-focused": {
      display: "none",
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.12rem",
      "& .Mui-focused": {
        color: "#fff",
      },
    },
    "& .MuiInputLabel-shrink ": {
      display: "none",
    },

    "& .MuiInputBase-root ": {
      fontSize: "1.12rem",
    },
  },
});
export default function AutoComplete({
  formik,
  placeholder,
  onChange,
  items,
  loading,
  onSubmit,
  name,
  address,
  renderOption,
  standard,
  studentModal,
  onChangeInput,
}) {
  const getAddress = (event, value, reason) => {
    onChange(value);
  };
  // useEffect(() => {
  //   if (value) {
  //     setAddress(value);
  //   }
  // }, [value]);
  const classes = useStyle();
  return (
    <>
      <Autocomplete
        freeSolo
        id={name}
        name={name}
        clearOnEscape={true}
        disableClearable
        inputValue={address}
        onInputChange={getAddress}
        noOptionsText={placeholder}
        onOpen={formik.handleBlur}
        getOptionLabel={(option) => option.label2 || ""}
        onChange={onChange}
        className={studentModal ? classes.root2 : classes.root}
        noOptionsText={
          <div style={{ color: "black", fontSize: "12px" }}>
            {" "}
            aucune option{" "}
          </div>
        }
        PaperComponent={({ children }) => (
          <Paper style={{ background: "" }}>{children}</Paper>
        )}
        options={items}
        getOptionSelected={(option, value) => {
          return option.name === value.name;
        }}
        renderOption={
          renderOption
            ? renderOption
            : (option) => {
                return option.name;
              }
        }
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Search input"

            name="address"
            value={address}
            margin="normal"
            // onBlur={onBlur}
            variant={standard ? "standard" : "outlined"}
            InputProps={{ ...params.InputProps, type: "text" }}
            onChange={onChangeInput}
            label={placeholder}
          />
        )}
      />
    </>
  );
}
