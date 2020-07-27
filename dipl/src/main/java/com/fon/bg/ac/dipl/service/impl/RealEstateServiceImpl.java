package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.RealEstate;
import com.fon.bg.ac.dipl.repository.RealEstateRepository;
import com.fon.bg.ac.dipl.service.services.IRealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RealEstateServiceImpl implements IRealEstateService {

    @Autowired
    RealEstateRepository realEstateRepository;

    @Override
    public List<RealEstate> returnAllRealEstates() {
        return realEstateRepository.findAll();
    }

    @Override
    public RealEstate saveRealEstate(RealEstate realEstate) {
        return realEstateRepository.save(realEstate);
    }

    @Override
    public RealEstate returnRealEstateById(int id) {
        List<RealEstate> allRealEstates = returnAllRealEstates();
        for (RealEstate realEstate : allRealEstates) {
            if(realEstate.getId() == id){
                return realEstate;
            }
        }
        return null;
    }

    @Override
    public List<RealEstate> returnRealEstatesByUserId(String userId) {
        List<RealEstate> allRealEstates = returnAllRealEstates();
        List<RealEstate> userRealEstates = new ArrayList<>();
        for (RealEstate realEstate : allRealEstates) {
            if(realEstate.getUser().getId().toString().equals(userId)){
                userRealEstates.add(realEstate);
            }
        }
        return userRealEstates;
    }
}
