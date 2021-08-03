import Grid from "@material-ui/core/Grid";
import React from "react";
import Level from "./level";
import Games from "./games";

const Round = ({draw, round}) => (
    <Grid item xs>
        <Level round={Object.keys(draw).length - round} />
        <Games games={draw[round]} />
    </Grid>
);

export default Round