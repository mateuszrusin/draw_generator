import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Player from "./player";
import React from "react";

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

export default Game