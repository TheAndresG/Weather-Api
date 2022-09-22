import React from "react";
import Searchbar from "./searchbar";
import "./nav.css";

const Nav = ({ onSelect, onSearch, list }) => {
  return (
    <nav className="nav">
      <h3>Api Weather</h3>
      <Searchbar onSearch={onSearch} onSelect={onSelect} list={list} />
    </nav>
  );
};

export default Nav;
