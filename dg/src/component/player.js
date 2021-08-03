import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import {username} from "../helper/username";

const Player = ({id}) => (
    <ListItem button>
        <ListItemAvatar>
            <Avatar
                alt={username(id)}
                src={`/static/images/avatar/${id}.jpg`}
            />
        </ListItemAvatar>
        <ListItemIcon>
            {id}
        </ListItemIcon>
        <ListItemText primary={username(id)} />
        <ListItemSecondaryAction>
            <Checkbox edge="end" />
        </ListItemSecondaryAction>
    </ListItem>
);

export default Player