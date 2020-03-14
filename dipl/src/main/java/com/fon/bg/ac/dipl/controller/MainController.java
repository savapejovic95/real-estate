package com.fon.bg.ac.dipl.controller;

import com.fon.bg.ac.dipl.domain.City;
import com.fon.bg.ac.dipl.domain.CityPart;
import com.fon.bg.ac.dipl.domain.Image;
import com.fon.bg.ac.dipl.domain.RealEstate;
import com.fon.bg.ac.dipl.domain.User;
import com.fon.bg.ac.dipl.service.services.ICityPartsService;
import com.fon.bg.ac.dipl.service.services.ICityService;
import com.fon.bg.ac.dipl.service.services.IImageService;
import com.fon.bg.ac.dipl.service.services.IRealEstateService;
import com.fon.bg.ac.dipl.service.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(path="/real-estate")
public class MainController {
    @Autowired
    private IUserService userService;
    @Autowired
    private IRealEstateService realEstateService;
    @Autowired
    private ICityService cityService;
    @Autowired
    private ICityPartsService cityPartsService;
    @Autowired
    private IImageService imageService;

    @PostMapping(path="/add-user")
    public @ResponseBody String addNewUser (
            @RequestBody Map<String, Object> requestBody) {

        User u = new User();
        String name = (String) requestBody.get("name");
        String email = (String) requestBody.get("email");
        u.setName(name);
        u.setEmail(email);
        userService.save(u);
        return "{\"status\":\"Saved\"}";
    }

    @GetMapping(path="/users")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userService.returnAllUsers();
    }

    @PostMapping(path="/add")
    public @ResponseBody RealEstate addNewRealEstate (
            @RequestBody Map<String, Object> requestBody) {

        String name = (String) requestBody.get("name");
        double price = Double.parseDouble((String) requestBody.get("price"));
        double squareMeters = Double.parseDouble((String) requestBody.get("squareMeters"));
        double rooms = Double.parseDouble((String) requestBody.get("rooms"));
        String type = (String) requestBody.get("type");
        String service = (String) requestBody.get("service");
        Map<String, Object> cityPartJson = (Map<String, Object>) requestBody.get("cityPart");
        CityPart cityPart = cityPartsService.returnCityPartById((int) cityPartJson.get("id"));
        String address = (String) requestBody.get("address");
        String heating = (String) requestBody.get("heating");
        String floor = (String) requestBody.get("floor");
        String description = (String) requestBody.get("description");
        String additionalInfo = (String) requestBody.get("additionalInfo");
        Map<String, Object> userJson = (Map<String, Object>) requestBody.get("user");
        User user = userService.returnUserById((int) userJson.get("id"));

        RealEstate re = new RealEstate(name, price, squareMeters, rooms, type, service, cityPart, address, heating, floor, description, additionalInfo, user);
        RealEstate saved = realEstateService.saveRealEstate(re);
        return saved;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<RealEstate> getAllRealEstates() {
        return realEstateService.returnAllRealEstates();
    }

    @GetMapping(path="/cities")
    public @ResponseBody Iterable<City> getAllCities() {
        return cityService.returnAllCities();
    }

    @GetMapping(path="/city-parts")
    public @ResponseBody Iterable<CityPart> getAllCityPartsFromCity(
            @RequestParam(value = "cityId", required = false) String cityId) {
        if(cityId != null) {
            return cityPartsService.returnCityPartsByCityId(Integer.parseInt(cityId));
        } else {
            return cityPartsService.returnAllCityParts();
        }
    }

    @GetMapping(path="/city-part")
    public @ResponseBody CityPart getCityPartById(
            @RequestParam(value = "id", required = true) String id) {
        return cityPartsService.returnCityPartById(Integer.parseInt(id));
    }

    @GetMapping(path="/user")
    public @ResponseBody User getUserById(
            @RequestParam(value = "id", required = true) String id) {
        return userService.returnUserById(Integer.parseInt(id));
    }
    
    @PostMapping(path="/upload-image")
    public @ResponseBody Image uploadImage (
    		@RequestParam (value = "image", required = true) MultipartFile file,
    		@RequestParam (value = "realEstateId", required = true) String realEstateId) throws IOException {

        RealEstate re = realEstateService.returnRealEstateById(Integer.parseInt(realEstateId));
        Image image = new Image(file.getOriginalFilename(), file.getContentType(), file.getBytes(), re);
        Image saved = imageService.saveImage(image);
        return saved;
    }

    @GetMapping(path="/filter")
    public @ResponseBody Iterable<RealEstate> getFilteredRealEstates(
            @RequestParam(value = "priceFrom", required = false) String priceFrom,
            @RequestParam(value = "priceTo", required = false) String priceTo,
            @RequestParam(value = "squareMetersFrom", required = false) String squareMetersFrom,
            @RequestParam(value = "squareMetersTo", required = false) String squareMetersTo,
            @RequestParam(value = "roomsFrom", required = false) String roomsFrom,
            @RequestParam(value = "roomsTo", required = false) String roomsTo,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "service", required = false) String service,
            @RequestParam(value = "cityPartId", required = false) String cityPartId,
            @RequestParam(value = "cityId", required = false) String cityId) {
        List<RealEstate> realEstates = realEstateService.returnAllRealEstates();
        List<RealEstate> filteredOut = new ArrayList<>();
        if(priceFrom != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getPrice() < Double.parseDouble(priceFrom)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(priceTo != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getPrice() > Double.parseDouble(priceTo)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(squareMetersFrom != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getSquareMeters() < Double.parseDouble(squareMetersFrom)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(squareMetersTo != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getSquareMeters() > Double.parseDouble(squareMetersTo)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(roomsFrom != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getRooms() < Double.parseDouble(roomsFrom)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(roomsTo != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getRooms() > Double.parseDouble(roomsTo)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(type != null){
            for (RealEstate realEstate : realEstates) {
                if(!(realEstate.getType().equals(type))){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(service != null){
            for (RealEstate realEstate : realEstates) {
                if(!(realEstate.getService().equals(service))){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(cityPartId != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getCityPart().getId() != Integer.parseInt(cityPartId)){
                    filteredOut.add(realEstate);
                }
            }
        }
        if(cityId != null){
            for (RealEstate realEstate : realEstates) {
                if(realEstate.getCityPart().getCity().getId() != Integer.parseInt(cityId)){
                    filteredOut.add(realEstate);
                }
            }
        }

        realEstates.removeAll(filteredOut);

        return realEstates;
    }
}
