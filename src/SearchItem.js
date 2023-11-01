const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchItem" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        placeholder="Search Items"
        role="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
export default SearchItem;
