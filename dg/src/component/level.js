import Typography from "@material-ui/core/Typography";
import React from "react";
import {level} from "../helper/level";

const Level = ({round}) => (
    <Typography variant="h5" component="h5">
        {level(round)}
    </Typography>
);

export default Level