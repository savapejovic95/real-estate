package com.fon.bg.ac.dipl.service.services;

import com.fon.bg.ac.dipl.domain.Image;

import java.util.List;

public interface IImageService {
	
	void saveImage(Image image);

    Image returnImageById(int id);
    
    List<Image> returnImagesByRealEstateId(int realEstateId);
    
    List<Image> returnAllImages();
}
