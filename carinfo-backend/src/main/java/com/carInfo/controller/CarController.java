package com.carInfo.controller;

import com.carInfo.dao.CarRepository;
import com.carInfo.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("/getAllMakes")
    public List<String> getAllMakes() {
        List<Car> cars = carRepository.findAll();
        return cars.stream()
                .map(Car::getMake)
                .distinct()
                .collect(Collectors.toList());
    }

    @GetMapping("/getCar/{name}")
    public List<Car> getCarByName(@PathVariable String name){
        return carRepository.findByName(name);
    }

    @GetMapping("/getModel/{model}")
    public List<Car> getCarsByModel(@PathVariable String model){
        return carRepository.findByModel(model);
    }

    @GetMapping("/getMake/{make}")
    public List<Car> getCarsByMake(@PathVariable String make){
        return carRepository.findByMake(make);
    }
}
