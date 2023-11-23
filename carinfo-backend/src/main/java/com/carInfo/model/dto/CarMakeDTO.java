package com.carInfo.model.dto;

public class CarMakeDTO {
    private String make;
    private String image;

    public CarMakeDTO(String make, String carMakeImageUrl) {
        this.make = make;
        this.image = carMakeImageUrl;
    }


    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}

