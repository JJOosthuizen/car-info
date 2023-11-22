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
        List<Car> cars = Arrays.asList(
            new Car("Tesla Model S", "Model S", "Tesla", 2022, "http://localhost:8080/images/tesla-model-s-2022.png"),
            new Car("Ford Mustang", "Mustang", "Ford", 2023,"http://localhost:8080/images/ford-mustang-2023.png"),
            new Car("BMW F30 3 Series Sedan", "F30 3 Series", "BMW", 2012,"http://localhost:8080/images/BMW-F30-3-Series-Sedan-2012.jpg"),
            new Car("Toyota Camry", "Camry", "Toyota", 2021, "http://localhost:8080/images/toyota-camry-2021.png"),
            new Car("Honda Civic", "Civic", "Honda", 2023, ""),
            new Car("Audi A4", "A4", "Audi", 2022, ""),
            new Car("Mercedes-Benz E-Class", "E-Class", "Mercedes-Benz", 2023, ""),
            new Car("Chevrolet Corvette", "Corvette", "Chevrolet", 2022, ""),
            new Car("Nissan Altima", "Altima", "Nissan", 2023, ""),
            new Car("Lamborghini Huracan", "Huracan", "Lamborghini", 2021, "http://localhost:8080/images/lamborghini-huracan-2021.png")
        );
        carRepository.saveAll(cars);
    }
}
