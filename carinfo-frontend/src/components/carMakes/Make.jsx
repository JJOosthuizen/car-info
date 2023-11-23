import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Make() {
  const [carModels, setCarModels] = useState([null]);

  useEffect(() => {

  });

  return (
    <div>
      <div className="wrapper">
        <h3>Popular Car Models</h3>
        <Splide
          options={{
            perPage: 3,
            gap: "2rem",
          }}
        >
          {carModels.map((car) => (
            <SplideSlide key={car.id}>
              <div className="card">
                <Link to={`/car/${car.id}`}>
                  <p>{car.model}</p>
                  <img src={car.image} alt={car.model} />
                  {/* <Gradient /> */}
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Make