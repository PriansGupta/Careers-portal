import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Applications(props) {
  const Applied = props.props;
  return (
    <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      {Applied.map((value) => (
        <ListItem
          key={value._id}
          disableGutters
          secondaryAction={<DeleteIcon />}
        >
          <ListItemText primary={value.props.organisation} />
        </ListItem>
      ))}
    </List>
  );
}
