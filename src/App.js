import { useState } from "react";
import "./App.css";
import Home from "./components/home/home";
import Nav from "./components/navbar/nav";

function App() {
  const [cities, setCities] = useState([]);
  const [list, setList] = useState([]);

  const ApiKey = "06964263985421b275424fb45015f2a8";

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
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`
    )
      .then((e) => e.json())
      .then((r) => {
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
        setCities((oldCities) => [...oldCities, newCity]);
        setList([]);
      });
  }

  return (
    <div className="App">
      <Nav onSelect={onSelect} onSearch={onSearch} list={list} />
      <Home cities={cities} />
    </div>
  );
}

export default App;
