package com.carInfo.controller;

import com.carInfo.dao.CarRepository;
import com.carInfo.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {
    @Autowired
    private CarRepository carRepository;

    @PostMapping("/saveCar")
    public String saveCar(@RequestBody Car car){
        carRepository.save(car);
        return "New car has been added";
    }
    @GetMapping("/getAllCars")
    public List<Car> getAll(){
        return carRepository.findAll();
    }

    @GetMapping("/getCar/{name}")
    public List<Car> getCarByName(@PathVariable String name){
        return carRepository.findByName(name);
    }
}
