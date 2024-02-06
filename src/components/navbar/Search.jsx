export const Search = ({ query, onQuery }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Buscar un personaje..."
      value={query}
      onChange={(e) => onQuery(e.target.value)}
    />
  );
};
