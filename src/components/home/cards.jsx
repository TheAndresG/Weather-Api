import React from "react";
import "./cards.css";

import d1 from "./ClimaImg/1D.jpeg";
import d2 from "./ClimaImg/2D.jpg";
import d3 from "./ClimaImg/3D.jpg";
import d4 from "./ClimaImg/4D.jpg";
import d9 from "./ClimaImg/9D.jpg";
import d10 from "./ClimaImg/10D.jpg";
import d11 from "./ClimaImg/11D.jpg";

import d13 from "./ClimaImg/13D.jpg";
import d50 from "./ClimaImg/50D.jpeg";
import n1 from "./ClimaImg/1N.jpg";
import n2 from "./ClimaImg/2N.jpg";
import n3 from "./ClimaImg/3N.jpg";
import n4 from "./ClimaImg/4N.jpg";
import n9 from "./ClimaImg/9N.jpg";
import n10 from "./ClimaImg/10N.jpg";
import n11 from "./ClimaImg/11N.jpg";

import n13 from "./ClimaImg/13N.jpg";
import n50 from "./ClimaImg/50N.jpg";

const Card = ({
  name,
  min,
  max,
  id,
  cities,
  setCities,
  favs,
  setFavs,
  isFav,
  img,
}) => {
  const Close = (e) => {
    e.preventDefault();
    setCities(cities.filter((h) => id !== h.id));
    // localStorage.setItem(
    //   "cities",
    //   JSON.stringify(cities.filter((h) => id !== h.id))
    // );
  };
  const addFav = (e) => {
    e.preventDefault();
    setFavs([...favs, cities.find((h) => h.id === id)]);
    localStorage.setItem(
      "favs",
      JSON.stringify([...favs, cities.find((h) => h.id === id)])
    );
    setCities(cities.filter((h) => id !== h.id));
    // localStorage.setItem(
    //   "cities",
    //   JSON.stringify(cities.filter((h) => id !== h.id))
    // );
  };
  const deleteFav = (e) => {
    e.preventDefault();

    setCities([...cities, favs.find((h) => h.id === id)]);

    // localStorage.setItem(
    //   "cities",
    //   JSON.stringify([...cities, favs.find((h) => h.id === id)])
    // );

    setFavs(favs.filter((h) => id !== h.id));
    localStorage.setItem(
      "favs",
      JSON.stringify(favs.filter((h) => id !== h.id))
    );
  };

  //background img
  let bgimg = "";
  let colorl = "black";

  switch (img) {
    case "01d":
      bgimg = d1;
      break;
    case "01n":
      bgimg = n1;
      colorl = "white";
      break;
    case "02d":
      bgimg = d2;
      break;
    case "02n":
      bgimg = n2;
      colorl = "white";
      break;
    case "03d":
      bgimg = d3;
      break;
    case "03n":
      bgimg = n3;
      colorl = "white";
      break;
    case "04d":
      bgimg = d4;
      break;
    case "04n":
      bgimg = n4;
      colorl = "white";
      break;
    case "09d":
      bgimg = d9;
      break;
    case "09n":
      bgimg = n9;
      colorl = "white";
      break;
    case "10d":
      bgimg = d10;
      colorl = "white";

      break;
    case "10n":
      bgimg = n10;
      colorl = "white";
      break;
    case "11d":
      bgimg = d11;
      break;
    case "11n":
      bgimg = n11;
      colorl = "white";
      break;
    case "13d":
      bgimg = d13;
      break;
    case "13n":
      bgimg = n13;
      colorl = "white";
      break;
    case "50d":
      bgimg = d50;
      break;
    case "50n":
      bgimg = n50;
      colorl = "white";
      break;
    default:
      break;
  }

  let styleBox = { color: `${colorl}`, "background-image": `url(${bgimg})` };

  return (
    <div id={id} className="card-cont" style={styleBox}>
      <div className="card-close-cont">
        {isFav ? (
          <button onClick={(e) => deleteFav(e)} className="card-b card-love">
            {"<"}/3
          </button>
        ) : (
          <button onClick={(e) => addFav(e)} className="card-b card-love">
            {"<"}3
          </button>
        )}
        {!isFav ? (
          <button onClick={(e) => Close(e)} className="card-b card-close ">
            X
          </button>
        ) : null}
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
        <div>
          <img
            src={"http://openweathermap.org/img/w/" + img + ".png"}
            alt="Icon"
          />
        </div>
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
