import "./App.css";
import { Scoreboard } from './Scoreboard';

const props = {
  visitor: {
    teamName: "MG",
    color: "#284185",
    backgroundColor: "#80A7CA",
  },
  home: {
    teamName: "Navs JV",
    color: "#ffffff",
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
