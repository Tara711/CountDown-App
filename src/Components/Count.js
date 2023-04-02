import React, { useState, useEffect } from "react";
import "./Count.css";

const Count = () => {
  const [time, setTime] = useState(timeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(timeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function timeLeft() {
    let year = new Date().getFullYear();
    let difference = +new Date(`${year}-12-31`) - +new Date();
    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return time;
  }

  return (
    <div className="count">
      <div>
        <span className="days">{time.days}</span> days,{" "}
        <span className="hours"> {time.hours}</span> hours,{" "}
        <span className="minutes">{time.minutes}</span> minutes,{" "}
        <span className="seconds">{time.seconds}</span>
      </div>
      <br />
      <div>seconds left until New Year's Eve!</div>
    </div>
  );
};

export default Count;
