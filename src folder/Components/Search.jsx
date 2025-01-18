import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center mt-4 gap-1">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search to shop the products"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#253068] text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2     bg-[#253068] text-white rounded-r-md hover:bg-[#1f2a4a] transition duration-300 "
      >
        Search
      </button>
    </div>
  );
};

export default Search;
