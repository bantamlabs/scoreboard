import { useState } from "react";

export type TeamScoreProps = {
  teamName: string;
  logo?: string;
  color: string;
  backgroundColor: string;
};
export function TeamScore({
  teamName,
  color,
  backgroundColor,
}: TeamScoreProps) {
  const [score, setScore] = useState(0);

  return (
    <div
      style={{
        backgroundColor,
        color,
      }}
      className="h-1/2"
    >
      <div className="h-full m-auto">
        <div className="px-2 text-4xl font-bold open-sans">
          <span
            className="align-middle"
          >
            <span
              onClick={() => setScore(score - 1)}
            >
              {teamName}
            </span>
            <span
              className="float-right"
              onClick={() => setScore(score + 1)}
            >
              {score}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
