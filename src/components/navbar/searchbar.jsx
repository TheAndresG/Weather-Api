import React, { useState } from "react";

const Searchbar = ({ onSearch, onSelect, list }) => {
  const [search, setSearch] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    console.log(list);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          placeholder="Search city..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" />
      </form>
      <ul>
        {list.map((e) => (
          <li id={e.lat} onClick={() => onSelect(e.lat, e.lon)}>
            {e.name} - {e.state && e.state} - {e.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
