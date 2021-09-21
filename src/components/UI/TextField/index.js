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
		fontSize: "16px",
		textAlign:'left'
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
