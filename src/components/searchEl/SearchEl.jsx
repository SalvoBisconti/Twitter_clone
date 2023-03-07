import "./index.css";

const SearchEl = ({ text }) => {
  return (
    <div className="SearchEl">
      <input type="text" placeholder={text} className="search-area" />
    </div>
  );
};
export default SearchEl;
