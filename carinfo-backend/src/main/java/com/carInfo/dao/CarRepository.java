package com.carInfo.dao;

import com.carInfo.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Integer> {

    Car findByName(String name);

    List<Car> findByModel(String model);

    List<Car> findByMake(String make);

}