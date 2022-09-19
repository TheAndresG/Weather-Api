import React from "react";
import Card from "./cards";

const Home = ({ cities }) => {
  // const arrayEj = [0, 1, 2, 3, 4];
  return (
    <div>
      {cities.length > 0 ? (
        <div>
          {cities.map((e) => (
            <Card key={e} name={e.name} min={e.min} max={e.max} />
          ))}
        </div>
      ) : (
        <p>Sin ciudades</p>
      )}
    </div>
  );
};

export default Home;
