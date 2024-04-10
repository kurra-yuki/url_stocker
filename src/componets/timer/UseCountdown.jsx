import { useState, useEffect } from 'react';

export const UseCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 初期値は24時間

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hoursLeft = Math.floor(timeLeft / 3600);

  return hoursLeft;
};