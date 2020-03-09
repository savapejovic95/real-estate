package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.City;
import com.fon.bg.ac.dipl.repository.CityRepository;
import com.fon.bg.ac.dipl.service.services.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService {

    @Autowired
    CityRepository cityRepository;

    @Override
    public List<City> returnAllCities() {
        return cityRepository.findAll();
    }

    @Override
    public City returnCityById(int id) {
        List<City> allCityParts = returnAllCities();
        for (City city : allCityParts) {
            if(city.getId() == id){
                return city;
            }
        }
        return null;
    }
}
