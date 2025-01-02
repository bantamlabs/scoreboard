import "./App.css";
import { Scoreboard } from './Scoreboard';

const props = {
  visitor: {
    teamName: "West Salem",
    color: "#BA5822",
    backgroundColor: "#000000",
  },
  home: {
    teamName: "Navs",
    color: "#202d4d",
    backgroundColor: "#EBB549",
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
