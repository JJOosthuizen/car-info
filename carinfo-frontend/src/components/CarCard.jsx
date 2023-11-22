import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="card">
      <h3>{car.name}</h3>
      <p>Model: {car.model}</p>
      <p>Make: {car.make}</p>
      <p>Year: {car.carYear}</p>
      <div className="image-container">
        <img src={car.imageUrl} alt={car.name} />
      </div>
    </div>
  );
};

export default CarCard;
