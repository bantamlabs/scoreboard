import "./App.css";
import { Scoreboard } from './Scoreboard';

const props = {
  visitor: {
    teamName: "MG",
    color: "#91B2D3",
    backgroundColor: "#284185",
  },
  home: {
    teamName: "Navs JV",
    color: "#1E2A48",
    backgroundColor: "#EEB650",
  },
  clock: {
    minutes: 15,
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
