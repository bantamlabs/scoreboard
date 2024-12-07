import { Clock, ClockProps } from "./Clock";
import { TeamScore, TeamScoreProps } from "./TeamScore";

export type ScoreboardProps = {
  home: TeamScoreProps;
  visitor: TeamScoreProps;
  clock: ClockProps;
};

export function Scoreboard({ visitor, clock, home }: ScoreboardProps) {
  return (
    <div className="grid grid-cols-3 select-none">
      <TeamScore {...visitor} />
      <Clock {...clock} />
      <TeamScore {...home} />
    </div>
  );
}
