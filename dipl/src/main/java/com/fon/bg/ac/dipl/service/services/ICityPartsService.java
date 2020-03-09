package com.fon.bg.ac.dipl.service.services;

import com.fon.bg.ac.dipl.domain.CityPart;

import java.util.List;

public interface ICityPartsService {

    List<CityPart> returnAllCityParts();

    List<CityPart> returnCityPartsByCityId(int cityId);

    CityPart returnCityPartById(int id);
}
