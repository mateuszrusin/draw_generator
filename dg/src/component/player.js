import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const Player = ({player}) => (
    <ListItem button>
        <ListItemAvatar>
            <Avatar
                alt={player.name}
                src={`/static/images/avatar/${player.id}.jpg`}
            />
        </ListItemAvatar>
        <ListItemIcon>
            {player.id}
        </ListItemIcon>
        <ListItemText primary={player.name} />
        <ListItemSecondaryAction>
            <Checkbox edge="end" />
        </ListItemSecondaryAction>
    </ListItem>
);

export default Player