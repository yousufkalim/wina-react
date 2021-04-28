import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  // inline: {
  //   display: "inline",
  // },
}));

export default function AlignItemsList({ not, onChangeStatus }) {
  const classes = useStyles();
  const [color, setColor] = useState(false);
  const [countCheck, setCountCheck] = useState(false);

  const HandleChangeStatus = () => {
    alert("hello");
  };
  return (
    <List
      className={classes.root}
      style={{
        paddingTop: "0px",
        paddingBottom: "0px",
        backgroundColor: "#fff",
        margin: 0,
        padding: 0,
      }}
    >
      <ListItem
        alignItems="flex-start"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          // borderBottom: "1px solid #ccc",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          style={{
            fontSize: "0.8rem",
          }}
          primary={not.title}
          secondary={
            <React.Fragment style={{ fontSize: "0.6rem" }}>
              <br />
              <p className="ml-2">{not.description}</p>
              <div className="text-right">
                <Chip
                  //   icon={icon}
                  className="MarkasRead"
                  label={"Mark as read"}
                  onClick={HandleChangeStatus}
                  // className={classes.chip}
                />
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
