import React from "react";
import Searchbar from "./searchbar";

const Nav = ({ onSelect, onSearch, list }) => {
  return (
    <nav>
      <h3>Api Weather</h3>
      <Searchbar onSearch={onSearch} onSelect={onSelect} list={list} />
    </nav>
  );
};

export default Nav;
