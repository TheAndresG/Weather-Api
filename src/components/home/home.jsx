import React from "react";
import Card from "./cards";

const Home = ({ cities }) => {
  return (
    <div>
      {cities.length > 0 ? (
        <div className="card-cont-cont">
          {cities.map((e) => (
            <Card key={e.id} name={e.name} min={e.min} max={e.max} id={e.id} />
          ))}
        </div>
      ) : (
        <p>Sin ciudades</p>
      )}
    </div>
  );
};

export default Home;
