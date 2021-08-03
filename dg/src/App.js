import './App.css';
import {drawGenerator} from "./drawGenerator";

import React from 'react';
import Grid from "@material-ui/core/Grid";
import Round from "./component/round";

function App() {
        
    const draw = drawGenerator(16);

    return (
        <div className="App">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {Object.keys(draw).map((round, index) => (
                    <Round draw={draw} round={round} key={index} />
                ))}
            </Grid>
        </div>
    );
}

export default App;
