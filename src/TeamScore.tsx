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
      className="h-1/2 opacity-95"
    >
      <div className="px-2 text-4xl font-bold open-sans h-full flex items-center">
        <div
          className="flex-auto"
          onClick={() => setScore(score - 1)}
        >
          {teamName}
        </div>
        <div
          onClick={() => setScore(score + 1)}
        >
          {score}
        </div>
      </div>
    </div>
  );
}
