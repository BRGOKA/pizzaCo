import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        className="duration-400 w-24 rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-600 sm:w-64 sm:focus:w-72"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
