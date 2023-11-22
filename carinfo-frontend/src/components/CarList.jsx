import React, { useState, useEffect } from 'react';
import CarService from '../services/CarServices';
import CarCard from './CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(6);
  const carsPerPage = 3;

  useEffect(() => {
    async function fetchCars() {
      try {
        const allCars = await CarService.getAllCars();
        setCars(allCars);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchCars();
  }, []);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + carsPerPage);
    setTimeout(() => {
      window.scroll({
        top: window.scrollY + 450,
        behavior: 'smooth'
      });
    }, 100);
  };

  const visibleCarList = cars.slice(0, visibleCars);

  return (
    <div>
      <h1>Car Information</h1>
      <div className="card-container">
        {visibleCarList.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      {cars.length > visibleCars && (
        <button onClick={loadMore}>Show More</button>
      )}
    </div>
  );
};

export default CarList;
