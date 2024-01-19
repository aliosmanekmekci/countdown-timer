import { useState, useRef } from "react";

export default function useTimer() {
  const [remaining, setRemaining] = useState(0);
  const remainingDuration = useRef(-1);
  const timerID = useRef(null);

  const startTimer = (duration) => {
    if (timerID.current) {
      stopTimer();
    }

    remainingDuration.current = duration;
    setRemaining(duration);

    timerID.current = setInterval(update, 1000);
  };

  const update = () => {
    remainingDuration.current -= 1;
    setRemaining(remainingDuration.current);

    if (remainingDuration.current === 0) {
      stopTimer();
    }
  };

  const stopTimer = () => {
    clearInterval(timerID.current);
    timerID.current = null;
    remainingDuration.current = -1;
  };

  return { time: remaining, startTimer, stopTimer };
}
