package com.carInfo.controller;

import com.carInfo.model.Car;
import com.carInfo.service.CarServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/car")
public class CarController {
    @Autowired
    private CarServiceInterface carServiceInterface;

    @PostMapping("/add")
    public String add(@RequestBody Car car){
        carServiceInterface.saveCar(car);
        return "New car has been added";
    }
}
