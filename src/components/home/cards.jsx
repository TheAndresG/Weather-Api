import React from "react";
import "./cards.css";

const Card = ({ name, min, max, id, cities, setCities }) => {
  const Cerrar = (e) => {
    e.preventDefault();
    console.log("hola");
    setCities(cities.filter((h) => id !== h.id));
    localStorage.setItem(
      "cities",
      JSON.stringify(cities.filter((h) => id !== h.id))
    );
  };
  return (
    <div id={id} className="card-cont">
      <div className="card-close-cont">
        <button onClick={(e) => Cerrar(e)} className="card-close">
          X
        </button>
      </div>
      <h4>{name}</h4>
      <div className="card-body">
        <div>
          <p>Min</p>
          <p>{min}°</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}°</p>
        </div>
        <div>Img</div>
      </div>
    </div>
  );
};

export default Card;

// id: r.id,
// name: r.name,
// min: Math.round(r.main.temp_min),
// max: Math.round(r.main.temp_max),
// img: r.weather[0].icon,
// wind: r.wind.speed,
// temp: r.main.temp,
// weather: r.weather[0].main,
// clouds: r.clouds.all,
// lat: r.coord.lat,
// lon: r.coord.lon,
