package com.carInfo;

import com.carInfo.dao.CarRepository;
import com.carInfo.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final CarRepository carRepository;

    @Autowired
    public DataLoader(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public void run(String... args) {
        loadMockData();
    }

    private void loadMockData() {
        // Create mock data
        List<Car> cars = Arrays.asList(
                new Car("Car1", "Model1", "Make1", 2020),
                new Car("Car2", "Model2", "Make2", 2021),
                new Car("Car3", "Model3", "Make3", 2019)
                // Add more mock data as needed
        );

        // Save mock data to the database
        carRepository.saveAll(cars);
    }
}
