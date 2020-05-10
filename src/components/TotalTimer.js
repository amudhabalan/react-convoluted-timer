import React from 'react';
import TimeDisplay from './TimeDisplay';

const TotalTimer = ({ timer }) => {
  return (
    <div className="totaltimer">
      <h1>Total Timer</h1>
      <TimeDisplay milliseconds={timer} />
    </div>
  );
};

export default TotalTimer;
