import React from "react";

const Card = ({ name, min, max }) => {
  return (
    <div>
      <h4>{name}</h4>
      <div>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}</p>
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
