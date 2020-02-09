import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const Timer = () => {
  const [timer1, setTimer1] = useState(0);
  const [timer1IsOn, setTimer1IsOn] = useState(false);
  const [timer2, setTimer2] = useState(0);
  const [timer2IsOn, setTimer2IsOn] = useState(false);
  const [timer3, setTimer3] = useState(0);
  const [timer3IsOn, setTimer3IsOn] = useState(false);

  const timeConversion = milliseconds => {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    var mseconds = (milliseconds % 60000) % 1000;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds + "." + mseconds;
  };

  useEffect(() => {
    let interval1 = null;
    if (timer1IsOn) {
      interval1 = setInterval(() => {
        setTimer1(timer1 => timer1 + 100);
      }, 100);
    } else if (!timer1IsOn && timer1 !== 0) {
      clearInterval(interval1);
    }
    return () => clearInterval(interval1);
  }, [timer1IsOn, timer1]);

  useEffect(() => {
    let interval2 = null;
    if (timer2IsOn) {
      interval2 = setInterval(() => {
        setTimer2(timer2 => timer2 + 1000);
      }, 1000);
    } else if (!timer2IsOn && timer2 !== 0) {
      clearInterval(interval2);
    }
    return () => clearInterval(interval2);
  }, [timer2IsOn, timer2]);

  useEffect(() => {
    let interval3 = null;
    if (timer3IsOn) {
      interval3 = setInterval(() => {
        setTimer3(timer3 => timer3 + 10000);
      }, 10000);
    } else if (!timer3IsOn && timer3 !== 0) {
      clearInterval(interval3);
    }
    return () => clearInterval(interval3);
  }, [timer3IsOn, timer3]);

  return (
    <Grid container spacing={5}>
      <Grid
        item
        xs={12}
        style={{ border: "2px solid grey", textAlign: "center" }}
      >
        <Typography variant="h5">Total Timer</Typography>
        <Typography variant="h6">
          {timeConversion(timer1 + timer2 + timer3)}
        </Typography>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "center" }}>
        <Typography variant="h5">Timer 1</Typography>
        <Typography variant="h6">{timeConversion(timer1)}</Typography>
        <Button
          variant="outlined"
          onClick={event => setTimer1IsOn(!timer1IsOn)}
        >
          {timer1IsOn ? "Pause" : "Play"}
        </Button>
        &nbsp;
        <Button variant="outlined" onClick={event => setTimer1(0)}>
          Reset
        </Button>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "center" }}>
        <Typography variant="h5">Timer 2</Typography>
        <Typography variant="h6">{timeConversion(timer2)}</Typography>
        <Button
          variant="outlined"
          onClick={event => setTimer2IsOn(!timer2IsOn)}
        >
          {timer2IsOn ? "Pause" : "Play"}
        </Button>
        &nbsp;
        <Button variant="outlined" onClick={event => setTimer2(0)}>
          Reset
        </Button>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "center" }}>
        <Typography variant="h5">Timer 3</Typography>
        <Typography variant="h6">{timeConversion(timer3)}</Typography>
        <Button
          variant="outlined"
          onClick={event => setTimer3IsOn(!timer3IsOn)}
        >
          {timer3IsOn ? "Pause" : "Play"}
        </Button>
        &nbsp;
        <Button variant="outlined" onClick={event => setTimer3(0)}>
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default Timer;
