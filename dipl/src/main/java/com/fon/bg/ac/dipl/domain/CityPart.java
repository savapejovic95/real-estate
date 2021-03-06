package com.fon.bg.ac.dipl.domain;

import javax.persistence.*;

@Entity
@Table(name = "city_part")
public class CityPart {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String name;
    @ManyToOne
    private City city;

    public CityPart() {
    }

    public CityPart(String name, City city) {
        this.name = name;
        this.city = city;
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

    public City getCity() { return city; }

    public void setCity(City city) { this.city = city; }
}
