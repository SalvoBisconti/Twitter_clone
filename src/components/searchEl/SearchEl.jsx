import "./index.css";

const SearchEl = ({ text, setInputValue }) => {
  return (
    <div className="SearchEl">
      <input
        type="text"
        placeholder={text}
        className="search-area"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
export default SearchEl;
