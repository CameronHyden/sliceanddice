import "./App.css";
import FilterBar from "./components/FilterBar/FilterBar";

import GameListCard from "./components/GameListCard/GameListCard";

const App = () => {
  return (
    <div>
      <FilterBar />
      <GameListCard />
    </div>
  );
};

export default App;
