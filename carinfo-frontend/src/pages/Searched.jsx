import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CarService from '../services/CarServices';
import CarCard from '../components/CarCard';

function Searched() {
  const [searchedCar, setSearchedCar] = useState(null);
  let params = useParams();

  useEffect(() => {
    async function fetchCars() {
      try {
        console.log(params.search);
        const carFound = await CarService.getCarByName(params.search);
        console.log(carFound, " this is the car");
        setSearchedCar(carFound);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchCars();
  }, [params.search]);

  return (
    <div>
      {searchedCar && <CarCard key={searchedCar.id} car={searchedCar} />}
    </div>
  )
}

export default Searched