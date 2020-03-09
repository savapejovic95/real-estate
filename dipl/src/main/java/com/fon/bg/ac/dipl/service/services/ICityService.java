package com.fon.bg.ac.dipl.service.services;

import com.fon.bg.ac.dipl.domain.City;

import java.util.List;

public interface ICityService {

    List<City> returnAllCities();

    City returnCityById(int id);
}
