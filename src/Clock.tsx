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
      if (!running) {
        return;
      }

      if (seconds === 0) {
        if (minutes === 0) {
          setRunning(false);
          return;
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
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
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [running]);

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
