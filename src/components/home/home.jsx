import React, { useEffect } from "react";
import { GetStogare } from "../functions";
import Card from "./cards";
import Fav from "./fav";

const Home = ({ cities, setCities, favs, setFavs }) => {
  useEffect(() => {
    if (GetStogare("favs") !== null) {
      setFavs(JSON.parse(GetStogare("favs")));
    }
  }, []);

  return (
    <div>
      {favs.length > 0 ? (
        <Fav
          favs={favs}
          cities={cities}
          setCities={setCities}
          setFavs={setFavs}
        />
      ) : null}
      {cities.length > 0 ? (
        <div className="card-cont-cont">
          {cities.map((e) => (
            <Card
              cities={cities}
              key={e.id}
              name={e.name}
              min={e.min}
              max={e.max}
              id={e.id}
              img={e.img}
              setCities={setCities}
              favs={favs}
              setFavs={setFavs}
              isFav={false}
            />
          ))}
        </div>
      ) : (
        <p>Add cities...</p>
      )}
    </div>
  );
};

export default Home;
