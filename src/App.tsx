import "./App.css";
import { Scoreboard } from './Scoreboard';

const props = {
  visitor: {
    teamName: "Stoughton",
    color: "#452272",
    backgroundColor: "#7A7777",
  },
  home: {
    teamName: "Navs",
    color: "#1E2A48",
    backgroundColor: "#F3C243",
  },
  clock: {
    minutes: 17,
    backgroundColor: "#ffffff",
  },
};

function App() {
  return (
    <Scoreboard {...props} />
  );
}

export default App;
