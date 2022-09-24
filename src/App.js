import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home/home";
import Nav from "./components/navbar/nav";
import { GetStogare } from "./components/functions/index";

function App() {
  const ApiKey = process.env.REACT_APP_APIKEY;

  const [cities, setCities] = useState([]);
  const [list, setList] = useState([]);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (GetStogare("cities") !== null) {
      setCities(JSON.parse(GetStogare("cities")));
    }
  }, []);

  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${ApiKey}`
    )
      .then((e) => e.json())
      .then((e) => {
        setList(e);
      });
  }

  function onSelect(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`
    )
      .then((e) => e.json())
      .then((r) => {
        setList([]);

        if (
          cities.find((e) => e.id === r.id) !== undefined ||
          favs.find((e) => e.id === r.id) !== undefined
        ) {
          return alert("Ya hay una ciudad con esas Coordenadas");
        }
        const newCity = {
          id: r.id,
          name: r.name,
          min: Math.round(r.main.temp_min),
          max: Math.round(r.main.temp_max),
          img: r.weather[0].icon,
          wind: r.wind.speed,
          temp: r.main.temp,
          weather: r.weather[0].main,
          clouds: r.clouds.all,
          lat: r.coord.lat,
          lon: r.coord.lon,
        };

        setCities([...cities, newCity]);
        localStorage.setItem("cities", JSON.stringify([...cities, newCity]));
      });
  }

  return (
    <div className="App">
      <Nav onSelect={onSelect} onSearch={onSearch} list={list} />
      <Home
        cities={cities}
        setCities={setCities}
        favs={favs}
        setFavs={setFavs}
      />
    </div>
  );
}

export default App;
