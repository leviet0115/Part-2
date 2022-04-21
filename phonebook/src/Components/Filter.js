const Filter = ({ keyword, handleKeyword }) => (
  <div>
    filter shown with: <input value={keyword} onChange={handleKeyword} />
  </div>
);

export default Filter;
