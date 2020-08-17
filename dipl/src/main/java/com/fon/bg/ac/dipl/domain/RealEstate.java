package com.fon.bg.ac.dipl.domain;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "real_estate")
public class RealEstate {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String name;
    private double price;
    private double squareMeters;
    private double rooms;
    private String type;
    private String service;
    @ManyToOne
    private CityPart cityPart;
    private String address;
    private String heating;
    private String floor;
    private String description;
    private String additionalInfo;
    @ManyToOne
    private User user;
    private Date dateAdded;

    public RealEstate() {
    }

    public RealEstate(String name, double price, double squareMeters, double rooms, String type, String service, CityPart cityPart, String address, String heating, String floor, String description, String additionalInfo, User user, Date dateAdded) {
        this.name = name;
        this.price = price;
        this.squareMeters = squareMeters;
        this.rooms = rooms;
        this.type = type;
        this.service = service;
        this.cityPart = cityPart;
        this.address = address;
        this.heating = heating;
        this.floor = floor;
        this.description = description;
        this.additionalInfo = additionalInfo;
        this.user = user;
        this.dateAdded = dateAdded;
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

    public double getRooms() {
        return rooms;
    }

    public void setRooms(double rooms) {
        this.rooms = rooms;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(Date dateAdded) {
        this.dateAdded = dateAdded;
    }
}
