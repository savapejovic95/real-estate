package com.fon.bg.ac.dipl.service.services;

import com.fon.bg.ac.dipl.domain.RealEstate;

import java.util.List;

public interface IRealEstateService {

    List<RealEstate> returnAllRealEstates();

    RealEstate saveRealEstate(RealEstate realEstate);

    RealEstate returnRealEstateById(int id);

    List<RealEstate> returnRealEstatesByUserId(String userId);
}
