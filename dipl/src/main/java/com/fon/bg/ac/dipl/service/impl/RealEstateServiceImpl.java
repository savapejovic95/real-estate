package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.City;
import com.fon.bg.ac.dipl.domain.RealEstate;
import com.fon.bg.ac.dipl.repository.RealEstateRepository;
import com.fon.bg.ac.dipl.service.services.IRealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public void saveRealEstate(RealEstate realEstate) {
        realEstateRepository.save(realEstate);
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
}
