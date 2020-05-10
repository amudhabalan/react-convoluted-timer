import React, { useState } from 'react';
import SingleTimer from './SingleTimer';
import TotalTimer from './TotalTimer';

const Timer = () => {
  const [timer1, setTimer1] = useState(0);
  const [timer1IsOn, setTimer1IsOn] = useState(false);
  const [timer2, setTimer2] = useState(0);
  const [timer2IsOn, setTimer2IsOn] = useState(false);
  const [timer3, setTimer3] = useState(0);
  const [timer3IsOn, setTimer3IsOn] = useState(false);

  return (
    <div className="container">
      <div className="timers-container">
        <TotalTimer timer={timer1 + timer2 + timer3} />
        <div className="timers">
          <SingleTimer
            timer={timer1}
            timerIsOn={timer1IsOn}
            setTimer={setTimer1}
            setTimerIsOn={setTimer1IsOn}
            intervalTime={100}
            id={1}
          />
          <SingleTimer
            timer={timer2}
            timerIsOn={timer2IsOn}
            setTimer={setTimer2}
            setTimerIsOn={setTimer2IsOn}
            intervalTime={1000}
            id={2}
          />
          <SingleTimer
            timer={timer3}
            timerIsOn={timer3IsOn}
            setTimer={setTimer3}
            setTimerIsOn={setTimer3IsOn}
            intervalTime={10000}
            id={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
