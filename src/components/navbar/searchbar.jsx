import React, { useState } from "react";

const Searchbar = ({ onSearch, onSelect, list }) => {
  const [search, setSearch] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    console.log(list);
  };

  return (
    <div className="nav-div">
      <form onSubmit={onSubmit} className="nav-form">
        <input
          className="nav-input"
          type="text"
          value={search}
          placeholder="Search city..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" className="nav-button" />
      </form>
      <ul className="nav-ul">
        {list.map((e) => (
          <li key={e.lat} onClick={() => onSelect(e.lat, e.lon)}>
            {e.name} - {e.state && e.state} - {e.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
