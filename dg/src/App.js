import './App.css';
import {drawGenerator} from "./drawGenerator";

import React, {Component, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Round from "./component/round";
import TextField from "@material-ui/core/TextField";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {numberOfPlayers: 8};

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
    }

    handleChange(event) {
        this.setState({numberOfPlayers: +event.target.value}, () => {
            this.draw = drawGenerator(+event.target.value);
            console.log(this.draw);
        });
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <TextField value={this.name} onChange={this.handleChange} />
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    {Object.keys(this.draw ?? {}).map((round, index) => (
                        <Round draw={this.draw} round={round} key={index}/>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default App;
