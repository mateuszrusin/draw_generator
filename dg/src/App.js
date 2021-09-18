import './App.css';
import {drawGenerator} from "./drawGenerator";

import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Round from "./component/round";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: '',
            draw: []
        };

        this.style = {
            margin: 0,
            bottom: 'auto',
            right: 20,
            top: 20,
            left: 'auto',
            position: 'fixed',
            zIndex: 1000
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload() {

        const players = this.state.input.split("\n").map((row, index) => {
            return {id: index + 1, name: row};
        });

        this.setState({draw: drawGenerator(players).map((round) => {
            return round.map((game) => {
                return {
                    seed: {
                        id: game.seed,
                        name: players.find(user => user.id === game.seed)?.name
                    },
                    opponent: {
                        id: game.opponent,
                        name: players.find(user => user.id === game.opponent)?.name
                    }
                }
            });
        })});
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Draw generator
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box m={3}>
                    <Paper elevation={3}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Every player in new line"
                            style={{ border: 0, width: '90%', padding: 5, margin: 10 }}
                            value={this.state.input}
                            onChange={this.handleChange}
                        />
                        <Box sx={{ padding: '10px' }}>
                            <Button variant="contained" color="primary" onClick={this.handleUpload}>
                                Generate
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    {this.state.draw.map((games, index) => (
                        <Round games={games} round={this.state.draw.length - index - 1} key={index}/>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default App;
