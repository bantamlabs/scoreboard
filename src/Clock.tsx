import { useEffect, useState } from "react";

export type ClockProps = {
  minutes: number;
  backgroundColor: string;
};
export function Clock(props: ClockProps) {
  const [minutes, setMinutes] = useState(props.minutes);
  const [seconds, setSeconds] = useState(0);
  const [period, setPeriod] = useState(1);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!running || (minutes === 0 && seconds === 0)) {
        return;
      }

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === " ") {
        setRunning(!running);
      } else if (event.key === "ArrowUp") {
        setRunning(false);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else {
          setSeconds(seconds + 1);
        }
      } else if (event.key === "ArrowDown") {
        setRunning(false);
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [running, seconds, minutes]);

  let periodDesc: string;
  switch (period) {
    case 1:
      periodDesc = "1st";
      break;
    case 2:
      periodDesc = "2nd";
      break;
    case 3:
      periodDesc = "3rd";
      break;
    default:
      periodDesc = "OT";
  }

  const fontFamily = "Azeret Mono";

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
      className="text-center"
      onClick={() => setRunning(!running)}
    >
      <span className="text-3xl font-bold me-4" style={{ fontFamily }}>
        {minutes}:{seconds < 10 ? "0" + seconds : seconds}
      </span>
      <span
        className="text-3xl"
        onClick={() => setPeriod(period < 4 ? period + 1 : 1)}
      >
        {periodDesc}
      </span>
    </div>
  );
}
