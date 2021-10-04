import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {

    '& .MuiInput-underline:before': {
      borderBottom: '1px solid #f7c40d'
    },

    '& .MuiFormLabel-root.Mui-focused': {
      color: "#9a9a9a"
    },
    '& .MuiInput-underline:after': {
      borderBottom: '1px solid #f7c40d'
    },
    "& .MuiAutocomplete-inputRoot": {
      // borderBottom: "1px solid #f7c40d",
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        // borderColor: "pink",
        // - Set the Input border
      },
      "&:hover": {
        borderColor: "#f7c40d", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "#f7c40d",
      },
    },
    '& .MuiFormLabel-root': {
      fontSize: '1.2rem',
      '& .Mui-focused': {
        color: "#fff"
      }
    },
   
    '& .MuiInputBase-root ': {
      fontSize: '1.2rem'
    }
  }
})
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
  standard
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
        onChange={(event, value) => {
          onSubmit(value);
        }}
        className={classes.root}
        options={items}
        getOptionLabel={(option) => {
          return option.name;
        }}
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
            name={name}
            margin="normal"
            // onBlur={onBlur}
            variant={standard ? 'standard' : 'outlined'}
            InputProps={{ ...params.InputProps, type: "text" }}
            label={placeholder}
          />
        )}
      />
    </>
  );
}
