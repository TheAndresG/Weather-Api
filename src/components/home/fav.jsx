import React from "react";
import Card from "./cards";
import "./fav.css";

const Fav = ({ favs, cities, setFavs, setCities }) => {
  return (
    <div className="card-fav-cont">
      <h4>Favoritos</h4>
      <div className="card-fav-display">
        {favs.map((e) => (
          <Card
            cities={cities}
            setCities={setCities}
            key={e.id}
            name={e.name}
            min={e.min}
            max={e.max}
            id={e.id}
            favs={favs}
            setFavs={setFavs}
            isFav={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Fav;
