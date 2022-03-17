import "./FilterBar.scss";
const FilterBar = () => {
  return (
    <div className="filter-container">
      <label htmlFor="filter-label">Choose a category:</label>
      <select id="filter" name="filter" size="1">
        <option value="co-op">co-op</option>
        <option value="Heavy Strategy">Heavy Strategy</option>
        <option value="Quick">Quick</option>
        <option value="Family">Family</option>
        <option value="Party">Party</option>
        <option value="Two Player">Two Player</option>
        <option value="Light Strategy">Light Strategy</option>
      </select>
    </div>
  );
};

export default FilterBar;
