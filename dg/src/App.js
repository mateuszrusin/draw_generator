import './App.css';
import {drawGenerator} from "./drawGenerator";

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import users from "./users";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function App() {

    const username = (id) => users.find(user => user.id === id).name;
    const roundName = (round) => {
        if (rounds - round === 0) {
            return 'FINAL'
        }

        return '1/' + Math.pow(2, rounds - round)
    };

    const draw = drawGenerator(16);
    const rounds = Object.keys(draw).length;

    const Game = ({game}) => (
        <Box m={3}>
            <Paper elevation={3}>
                <List component="nav" aria-label="main mailbox folders">
                    <Player id={game.seed} />
                    <Player id={game.opponent} />
                </List>
            </Paper>
        </Box>
    )

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

    const Phase = ({round}) => (
        <Typography variant="h5" component="h5">
            {roundName(round)}
        </Typography>
    );

    const Round = ({draw, round}) => (
        <Grid item xs>
            <Phase round={round} />
            {draw[round].map((game) => (
                <Game game={game} />
            ))}
        </Grid>
    );

    return (
        <div className="App">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {Object.keys(draw).map((round, index) => (
                    <Round draw={draw} round={round} />
                ))}
            </Grid>
        </div>
    );
}

export default App;
