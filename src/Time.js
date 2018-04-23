import React from "react";

const msPerSecond = 1000;
const msPerMinute = msPerSecond * 60;
const msPerHour = msPerMinute * 60;

const msToHour = ms => {
  return [Math.floor(ms / msPerHour), ms % msPerHour];
};

const msToMinutes = ms => {
  return [Math.floor(ms / msPerMinute), ms % msPerMinute];
};

const msToSeconds = ms => {
  return [Math.floor(ms / msPerSecond)];
};

const Time = props => (
  <div className="time-container">
    <div className="time-inner-container">
      <div className="time-digits">
        {msToHour(props.ms)[0]
          .toString()
          .padStart(2, 0)}:
        {msToMinutes(msToHour(props.ms)[1])[0]
          .toString()
          .padStart(2, 0)}:
        {msToSeconds(msToMinutes(props.ms)[1])[0]
          .toString()
          .padStart(2, 0)}
      </div>
      <div className="time-text">
        <div className="time-text-item">Hour</div>
        <div className="time-text-item">Minute</div>
        <div className="time-text-item">Second</div>
      </div>
    </div>
  </div>
);

export default Time;
