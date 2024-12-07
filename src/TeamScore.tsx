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
    >
      <div className="flex flex-row pb-1 pl-2 text-3xl">
        <div
          className="basis-3/4 font-bold"
          onClick={() => setScore(score - 1)}
        >
          {teamName}
        </div>
        <div
          className="basis-1/4 text-center"
          onClick={() => setScore(score + 1)}
        >
          {score}
        </div>
      </div>
    </div>
  );
}
