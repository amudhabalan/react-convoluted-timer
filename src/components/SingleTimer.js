import React, { useEffect } from 'react';
import TimeDisplay from './TimeDisplay';

const SingleTimer = ({
  timer,
  timerIsOn,
  setTimer,
  setTimerIsOn,
  intervalTime,
  id
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
    <div className="timer">
      <h2>Timer {id}</h2>
      <TimeDisplay milliseconds={timer} />
      <button
        className="btn btn-play"
        onClick={event => setTimerIsOn(!timerIsOn)}
      >
        {timerIsOn ? 'Pause' : 'Play'}
      </button>
      <button
        className="btn btn-reset"
        onClick={event => {
          setTimer(0);
          setTimerIsOn(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SingleTimer;
