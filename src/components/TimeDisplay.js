import React from 'react';

const TimeDisplay = ({ milliseconds }) => {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  var mseconds = (milliseconds % 60000) % 1000;
  return (
    <p>
      {minutes + ':' + (seconds < 10 ? '0' : '') + seconds + '.' + mseconds}
    </p>
  );
};

export default TimeDisplay;
