import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		// display: "flex",
		// flexWrap: "noWrap",
	},
	textField: {
		width: "100%",
		fontSize: "1.375rem",
		textAlign:'left',
		"& .MuiFormLabel-root": {
			fontSize: "1.375rem"
		},

		'& .MuiOutlinedInput-notchedOutline':{
			borderColor: "#2879d9",
		  },
		"& .MuiOutlinedInput-root": {
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
			// "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
			//   // - Set the Input border when parent is focused
			//   borderColor: "#2879d9",
			// },
		  },
	},
}));
export default function LayoutTextFields(props) {
	const classes = useStyles();

	return (
		<TextField
			name={props.name}
			label={props.label ? props.label : "Label"}
			value={props.value}
			style={{ margin: 2 }}
			placeholder={props.placeholder ? props.placeholder : "Placeholder"}
			onChange={props.onChange}
			className={classes.textField}
			onBlur={props.onBlur}
			fullWidth={props.fullWidth ? props.fullWidth : true}
			margin="normal"
			InputLabelProps={{
				shrink: true,
			}}
		/>
	);
}
