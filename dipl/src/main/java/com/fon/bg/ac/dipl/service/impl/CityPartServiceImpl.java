package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.CityPart;
import com.fon.bg.ac.dipl.repository.CityPartRepository;
import com.fon.bg.ac.dipl.service.services.ICityPartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CityPartServiceImpl implements ICityPartsService {

    @Autowired
    CityPartRepository cityPartRepository;

    @Override
    public List<CityPart> returnAllCityParts() {
        List<CityPart> cityParts =  cityPartRepository.findAll();
        return cityParts;
    }

    @Override
    public List<CityPart> returnCityPartsByCityId(int cityId) {
        List<CityPart> allCityParts = returnAllCityParts();
        List<CityPart> cityParts = new ArrayList<>();
        for (CityPart cityPart : allCityParts) {
            if(cityPart.getCity().getId() == cityId){
                cityParts.add(cityPart);
            }
        }
        return cityParts;
    }

    @Override
    public CityPart returnCityPartById(int id) {
        List<CityPart> allCityParts = returnAllCityParts();
        for (CityPart cityPart : allCityParts) {
            if(cityPart.getId() == id){
                return cityPart;
            }
        }
        return null;
    }
}
