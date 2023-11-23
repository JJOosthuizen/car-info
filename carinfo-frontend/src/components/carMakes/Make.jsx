import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarService from '../../services/CarServices';

function Make() {
  const [carModels, setCarModels] = useState([null]);

  useEffect(() => {
    async function fetchMakes() {
      try {
        const allMakes = await CarService.getAllMakes();
        console.log(allMakes)
        setCarModels(allMakes);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchMakes();
  }, []);

  return (

    < div >
      {carModels.forEach((car, index) => (

      ))}

    </div >

    // Use the variables for rendering or any other purpose
    // For example, you can render JSX here using make and image
    // Replace this with your JSX structure
    // <div key={index}>
    //   <p>{make}</p>
    //   <img src={image} alt={make} />
    // </div>

    // <div>
    //   {carModels && carModels.length > 0 ? (
    //     <div className="wrapper">
    //       <h3>Popular Car Models</h3>
    //       <Splide
    //         options={{
    //           perPage: 3,
    //           gap: "2rem",
    //         }}
    //       >
    //         {carModels.map((car) => (
    //           <SplideSlide key={car.make}>
    //             <div className="card">
    //               <Link to={`/car/${car.make}`}>
    //                 <p>{car.make}</p>
    //                 <img src={car.image} alt={car.make} />
    //               </Link>
    //             </div>
    //           </SplideSlide>
    //         ))}
    //       </Splide>
    //     </div>
    //   ) : (
    //     <p>No car models available.</p>
    //   )}
    // </div>
  )
}

export default Make