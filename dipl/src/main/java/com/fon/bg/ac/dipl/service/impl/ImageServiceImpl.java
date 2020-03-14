package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.Image;
import com.fon.bg.ac.dipl.repository.ImageRepository;
import com.fon.bg.ac.dipl.service.services.IImageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImageServiceImpl implements IImageService {

    @Autowired
    ImageRepository imageRepository;
    
    @Override
	public Image saveImage(Image image) {
		return imageRepository.save(image);
	}

	@Override
	public Image returnImageById(int id) {
		List<Image> allImages = returnAllImages();
        for (Image image : allImages) {
            if(image.getId() == id){
                return image;
            }
        }
        return null;
	}

	@Override
	public List<Image> returnImagesByRealEstateId(int realEstateId) {
		List<Image> allImages = returnAllImages();
        List<Image> realEstateImages = new ArrayList<>();
        for (Image image : allImages) {
            if(image.getRealEstate().getId() == realEstateId){
            	realEstateImages.add(image);
            }
        }
        return realEstateImages;
	}

	@Override
	public List<Image> returnAllImages() {
		List<Image> allImages = imageRepository.findAll();
		return allImages;
	}
}
