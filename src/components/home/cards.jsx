import React from "react";
import "./cards.css";

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
    localStorage.setItem(
      "cities",
      JSON.stringify(cities.filter((h) => id !== h.id))
    );
  };
  const addFav = (e) => {
    e.preventDefault();
    setFavs([...favs, cities.find((h) => h.id === id)]);
    localStorage.setItem(
      "favs",
      JSON.stringify([...favs, cities.find((h) => h.id === id)])
    );
    setCities(cities.filter((h) => id !== h.id));
    localStorage.setItem(
      "cities",
      JSON.stringify(cities.filter((h) => id !== h.id))
    );
  };
  const deleteFav = (e) => {
    e.preventDefault();

    setCities([...cities, favs.find((h) => h.id === id)]);

    localStorage.setItem(
      "cities",
      JSON.stringify([...cities, favs.find((h) => h.id === id)])
    );

    setFavs(favs.filter((h) => id !== h.id));
    localStorage.setItem(
      "favs",
      JSON.stringify(favs.filter((h) => id !== h.id))
    );
  };

  //background img
  let bgimg = "";
  let color = "";

  switch (img) {
    case "01d":
      bgimg = null;
      break;
    case "01n":
      bgimg = null;
      color = "white";
      break;
    case "02d":
      bgimg = null;
      break;
    case "02n":
      bgimg = null;
      color = "white";
      break;
    case "03d":
      bgimg = null;
      break;
    case "03n":
      bgimg = null;
      color = "white";
      break;
    case "04d":
      bgimg = null;
      break;
    case "04n":
      bgimg = null;
      color = "white";
      break;
    case "09d":
      bgimg = null;
      break;
    case "09n":
      bgimg = null;
      color = "white";
      break;
    case "10d":
      bgimg = null;
      break;
    case "10n":
      bgimg = null;
      color = "white";
      break;
    case "11d":
      bgimg = null;
      break;
    case "11n":
      bgimg = null;
      color = "white";
      break;
    case "13d":
      bgimg = null;
      break;
    case "13n":
      bgimg = null;
      color = "white";
      break;
    case "50d":
      bgimg = null;
      break;
    case "50n":
      bgimg = null;
      color = "white";
      break;
    default:
      break;
  }

  let styleBox = `background-image: ${bgimg};`;

  return (
    <div id={id} className="card-cont">
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
      <div className="card-body" style={{ ba }}>
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
