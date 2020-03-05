package com.fon.bg.ac.dipl.domain;

import javax.persistence.*;

@Entity
@Table(name = "real_estate")
public class RealEstate {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String name;
    private double price;
    private double squareMeters;
    private String type;
    private String service;
    @ManyToOne
    private CityPart cityPart;
    private String heating;
    private String floor;
    private String description;
    private String additionalInfo;

    public RealEstate() {
    }

    public RealEstate(String name, double price, double squareMeters, String type, String service, CityPart cityPart, String heating, String floor, String description, String additionalInfo) {
        this.name = name;
        this.price = price;
        this.squareMeters = squareMeters;
        this.type = type;
        this.service = service;
        this.cityPart = cityPart;
        this.heating = heating;
        this.floor = floor;
        this.description = description;
        this.additionalInfo = additionalInfo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getSquareMeters() {
        return squareMeters;
    }

    public void setSquareMeters(double squareMeters) {
        this.squareMeters = squareMeters;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public CityPart getCityPart() {
        return cityPart;
    }

    public void setCityPart(CityPart cityPart) {
        this.cityPart = cityPart;
    }

    public String getHeating() {
        return heating;
    }

    public void setHeating(String heating) {
        this.heating = heating;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
}
