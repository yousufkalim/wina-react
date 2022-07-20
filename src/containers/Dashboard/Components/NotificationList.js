import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { DEFAULT_IMAGE } from "../../../Globals";

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
		width: "100%",
		maxWidth: "40ch",
		backgroundColor: theme.palette.background.paper,
	},
	// inline: {
	//   display: "inline",
	// },
}));

export default function AlignItemsList({ not, onChangeStatus }) {
	const classes = useStyles();
	const HandleChangeStatus = (notify) => {
		onChangeStatus(notify);
	};
	return (
		<List
			className={classes.root}
			style={{
				paddingTop: "0px",
				paddingBottom: "0px",
				backgroundColor: not.color,
				margin: 0,
				fontSize: "16px",
				padding: 0,
			}}
		>
			<ListItem
				alignItems="flex-start"
				style={{
					//	cursor: "pointer",
					paddingTop: "0px",
					paddingBottom: "0px",
					// borderBottom: "1px solid #ccc",
				}}
			>
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src={DEFAULT_IMAGE} />
				</ListItemAvatar>
				<ListItemText

					primary={
						<React.Fragment>
							<p style={{ fontSize: "14px", fontWeight: "600" }}>
								{not.title}
							</p>
						</React.Fragment>
					}
					secondary={
						<React.Fragment>
							<p className="ml-2" style={{ fontSize: "14px" }}>{not.description}</p>
							{not.statusNew === true ? (
								<div className="text-right" style={{ fontSize: "13px" }}>
									<Chip
										label={"Mark as read"}
										onClick={() => HandleChangeStatus(not)}
									/>
								</div>
							) : (
								""
							)}
						</React.Fragment>
					}
				/>
			</ListItem>
			<hr style={{ border: ".8px solid #CCCCCC" }} />
		</List>
	);
}
