import useTimer from "./Hooks/TimerState.jsx";

export default function TimerDisplay() {
  const { time, startTimer, stopTimer } = useTimer(5);

  return (
    <div className="container">
      <h3>CountDown Timer</h3>
      <p>{time}</p>
      <div className="buttons">
        <button className="start--button" onClick={() => startTimer(5)}>
          Start
        </button>
        <button className="stop--button" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
}
