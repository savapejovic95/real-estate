package com.fon.bg.ac.dipl.controller;

import com.fon.bg.ac.dipl.domain.City;
import com.fon.bg.ac.dipl.domain.CityPart;
import com.fon.bg.ac.dipl.domain.RealEstate;
import com.fon.bg.ac.dipl.domain.User;
import com.fon.bg.ac.dipl.repository.CityPartRepository;
import com.fon.bg.ac.dipl.repository.CityRepository;
import com.fon.bg.ac.dipl.repository.RealEstateRepository;
import com.fon.bg.ac.dipl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping(path="/real-estate")
public class MainController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RealEstateRepository realEstateRepository;
    @Autowired
    private CityRepository cityRepository;
    @Autowired
    private CityPartRepository cityPartRepository;

    @PostMapping(path="/add-user")
    public @ResponseBody String addNewUser (
            @RequestBody Map<String, Object> requestBody) {

        User u = new User();
        String name = (String) requestBody.get("name");
        String email = (String) requestBody.get("email");
        u.setName(name);
        u.setEmail(email);
        userRepository.save(u);
        return "Saved";
    }

    @GetMapping(path="/users")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewRealEstate (
            @RequestBody Map<String, Object> requestBody) {

        String name = (String) requestBody.get("name");
        double price = Double.parseDouble((String) requestBody.get("price"));
        double squareMeters = Double.parseDouble((String) requestBody.get("squareMeters"));;
        String type = (String) requestBody.get("type");
        String service = (String) requestBody.get("service");
        CityPart cityPart = (CityPart) requestBody.get("cityPart");
        String heating = (String) requestBody.get("heating");
        String floor = (String) requestBody.get("floor");
        String description = (String) requestBody.get("description");
        String additionalStuff = (String) requestBody.get("additionalStuff");
        User user = (User)  requestBody.get("user");

        RealEstate re = new RealEstate(name, price, squareMeters, type, service, cityPart, heating, floor, description, additionalStuff, user);
        realEstateRepository.save(re);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<RealEstate> getAllRealEstates() {
        return realEstateRepository.findAll();
    }

    @GetMapping(path="/cities")
    public @ResponseBody Iterable<City> getAllCities() {
        return cityRepository.findAll();
    }

    @GetMapping(path="/city-parts")
    public @ResponseBody Iterable<CityPart> getAllCityParts() {
        return cityPartRepository.findAll();
    }
}
