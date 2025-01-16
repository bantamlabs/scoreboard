import { Clock, ClockProps } from "./Clock";
import { TeamScore, TeamScoreProps } from "./TeamScore";

export type ScoreboardProps = {
  home: TeamScoreProps;
  visitor: TeamScoreProps;
  clock: ClockProps;
};

export function Scoreboard({ visitor, clock, home }: ScoreboardProps) {
  return (
    <div style={{ width: "500px", height: "100px" }} className="flex select-none">
      <div className="h-full">
        <Clock {...clock} />
      </div>
      <div className="h-full w-full">
        <TeamScore {...visitor} />
        <TeamScore {...home} />
      </div>
    </div>
  );
}
