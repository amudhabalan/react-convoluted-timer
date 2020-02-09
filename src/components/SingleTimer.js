import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import TimeDisplay from "./TimeDisplay";

const SingleTimer = ({ timer, timerIsOn, setTimer, setTimerIsOn }) => {
  return (
    <Grid item xs={4} style={{ textAlign: "center" }}>
      <Typography variant="h5">Timer 3</Typography>
      <TimeDisplay milliseconds={timer} />
      <Button variant="outlined" onClick={event => setTimerIsOn(!timerIsOn)}>
        {timerIsOn ? "Pause" : "Play"}
      </Button>
      &nbsp;
      <Button
        variant="outlined"
        onClick={event => {
          setTimer(0);
          setTimerIsOn(false);
        }}
      >
        Reset
      </Button>
    </Grid>
  );
};

export default SingleTimer;
