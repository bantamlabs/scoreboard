import "./App.css";
import { Scoreboard } from './Scoreboard';

const props = {
  visitor: {
    teamName: "Waupun",
    color: "#E4B548",
    backgroundColor: "#000000",
  },
  home: {
    teamName: "Navs",
    color: "#1E2A48",
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
