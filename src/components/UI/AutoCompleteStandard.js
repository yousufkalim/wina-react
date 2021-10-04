import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles({
    root: {
        '& .MuiFormLabel-root': {
            fontSize: '1.5rem',
          },
         
          '& .MuiInputBase-root ': {
            fontSize: '1.5rem'
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
  const classes = useStyle();
  // useEffect(() => {
  //   if (value) {
  //     setAddress(value);
  //   }
  // }, [value]);
  return (
    <>
      <Autocomplete
      className={standard && classes.root}
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
