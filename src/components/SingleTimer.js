import React, { useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import TimeDisplay from "./TimeDisplay";

const SingleTimer = ({
  timer,
  timerIsOn,
  setTimer,
  setTimerIsOn,
  intervalTime
}) => {
  useEffect(() => {
    let interval = null;
    if (timerIsOn) {
      interval = setInterval(() => {
        setTimer(timer => timer + intervalTime);
      }, intervalTime);
    } else if (!timerIsOn && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerIsOn, timer, setTimer, intervalTime]);

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
