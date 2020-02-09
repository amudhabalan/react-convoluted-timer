import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SingleTimer from "./SingleTimer";
import TotalTimer from "./TotalTimer";

const Timer = () => {
  const [timer1, setTimer1] = useState(0);
  const [timer1IsOn, setTimer1IsOn] = useState(false);
  const [timer2, setTimer2] = useState(0);
  const [timer2IsOn, setTimer2IsOn] = useState(false);
  const [timer3, setTimer3] = useState(0);
  const [timer3IsOn, setTimer3IsOn] = useState(false);

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
      <TotalTimer timer={timer1+timer2+timer3} />
      <SingleTimer timer={timer1} timerIsOn={timer1IsOn} setTimer={setTimer1} setTimerIsOn={setTimer1IsOn}/>
      <SingleTimer timer={timer2} timerIsOn={timer2IsOn} setTimer={setTimer2} setTimerIsOn={setTimer2IsOn}/>
      <SingleTimer timer={timer3} timerIsOn={timer3IsOn} setTimer={setTimer3} setTimerIsOn={setTimer3IsOn}/>
    </Grid>
  );
};

export default Timer;
