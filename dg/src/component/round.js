import Grid from "@material-ui/core/Grid";
import React from "react";
import Level from "./level";
import Games from "./games";

const Round = ({games, round}) => (
    <Grid item xs>
        <Level round={round} />
        <Games games={games} />
    </Grid>
);

export default Round