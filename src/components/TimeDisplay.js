import React from "react";
import { Typography } from "@material-ui/core";

const TimeDisplay = ({ milliseconds }) => {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    var mseconds = (milliseconds % 60000) % 1000;
    return <Typography>{minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "." + mseconds}</Typography>
};

export default TimeDisplay;
