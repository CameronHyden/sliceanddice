import "./App.css";
import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import GameListCard from "./components/GameListCard/GameListCard";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <FilterBar />
      <GameListCard />
    </div>
  );
};

export default App;
