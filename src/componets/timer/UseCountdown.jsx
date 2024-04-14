import { useState, useEffect } from 'react';

export const UseCountdown = () => {
  const [creationTime, setCreationTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 初期値は24時間

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const timePassed = Math.floor((currentTime - creationTime) / 1000);
      setTimeLeft(timeLeft => timeLeft - timePassed);
      setCreationTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [creationTime]);

  const hoursLeft = Math.floor(timeLeft / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = timeLeft % 60;

  if(hoursLeft > 0) {
    return { value: hoursLeft, unit: 'h'};
  }
  else if(minutesLeft > 0) {
    return { value: minutesLeft, unit: 'm'};
  }
  else if(secondsLeft >= 0) {
    return { value: secondsLeft, unit: 's'};
  }
  else {
    return { value: 0, unit: 's'};
  }
};