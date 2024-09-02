"use clint";

import React from "react";
import { useState, useEffect } from "react";

export const WithUseEffects = () => {
  const [timer, setTimer] = useState({
    time: 0,
    minute: 0,
    second: 0,
    milliSecond: 0,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    let inter;
    if (start) {
      inter = setInterval(() => {
        setTimer((prev) => {
          let time = prev.time;
          let minute = prev.minute;
          let second = prev.second;
          let milliSecond = prev.milliSecond;
          milliSecond++;

          if (milliSecond === 100) {
            second++;
            milliSecond = 0;
          }
          if (second === 60) {
            minute++;
            second = 0;
          }
          if (minute === 60) {
            time++;
            minute = 0;
          }
        });
      }, 10);
    }
    setSeconds((prev) => {
      return prev + 1;
    });
  });
  return (
    <div>
      <div></div>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};
