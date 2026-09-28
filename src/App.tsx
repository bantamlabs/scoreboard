import "./App.css";
import { Scoreboard } from './Scoreboard';

const props = {
  visitor: {
    teamName: "Fond du Lac",
    color: "#7B2D37",
    backgroundColor: "grey",
  },
  home: {
    teamName: "Navs",
    color: "#ffffff",
    backgroundColor: "#EEB650",
  },
  clock: {
    minutes: 17,
    color: "#ffffff",
    backgroundColor: "#333333",
  },
};

function App() {
  return (
    <Scoreboard {...props} />
  );
}

export default App;
