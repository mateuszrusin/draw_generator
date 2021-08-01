import './App.css';
import {drawGenerator} from "./drawGenerator";

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import users from "./users";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function App() {

    const username = (id) => users.find(user => user.id === id).name;
    const draw = drawGenerator(100);
    const data = draw[1];
    const rounds = Object.keys(draw).length;
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
                <Checkbox
                    edge="end"
                />
            </ListItemSecondaryAction>
        </ListItem>
    );

    return (
        <div className="App">

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper>
                        {data.map((game, index) => (
                            <List component="nav" aria-label="main mailbox folders" key={index}>
                                <Player id={game.seed} />
                                <Player id={game.opponent} />
                                <Divider />
                            </List>
                        ))}
                    </Paper>
                </Grid>
                {[...Array(rounds)].map((elementInArray, index) => (
                    <Grid item xs id={index}>
                        <Paper>xs</Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default App;
