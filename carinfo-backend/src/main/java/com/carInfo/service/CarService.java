package com.carInfo.service;

import com.carInfo.model.Car;
import com.carInfo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService implements CarServiceInterface{
    @Autowired
    private CarRepository carRepository;
    @Override
    public Car saveCar(Car car) {
        return carRepository.save(car);
    }
}
