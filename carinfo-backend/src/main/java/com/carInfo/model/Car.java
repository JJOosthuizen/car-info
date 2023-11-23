package com.carInfo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String model;
    private String make;
    private int carYear;
    private String imageUrl;
    private String carMakeImageUrl;

    public Car() {

    }

    public Car(String name, String model, String make, int year, String imageUrl, String carMakeImageUrl) {
        this.name = name;
        this.model = model;
        this.make = make;
        this.carYear = year;
        this.imageUrl = imageUrl;
        this.carMakeImageUrl = carMakeImageUrl;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public int getCarYear() {
        return carYear;
    }

    public void setCarYear(int year) {
        this.carYear = year;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCarMakeImageUrl() {
        return carMakeImageUrl;
    }

    public void setCarMakeImageUrl(String carMakeImageUrl) {
        this.carMakeImageUrl = carMakeImageUrl;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", model='" + model + '\'' +
                ", make='" + make + '\'' +
                ", year=" + carYear +
                '}';
    }

}
