import "./App.css";
import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <FilterBar />
    </div>
  );
};

export default App;
