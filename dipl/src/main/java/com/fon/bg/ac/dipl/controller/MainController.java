package com.fon.bg.ac.dipl.controller;

import com.fon.bg.ac.dipl.domain.City;
import com.fon.bg.ac.dipl.domain.CityPart;
import com.fon.bg.ac.dipl.domain.RealEstate;
import com.fon.bg.ac.dipl.domain.User;
import com.fon.bg.ac.dipl.service.services.ICityPartsService;
import com.fon.bg.ac.dipl.service.services.ICityService;
import com.fon.bg.ac.dipl.service.services.IRealEstateService;
import com.fon.bg.ac.dipl.service.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path="/add-user")
    public @ResponseBody String addNewUser (
            @RequestBody Map<String, Object> requestBody) {

        User u = new User();
        String name = (String) requestBody.get("name");
        String email = (String) requestBody.get("email");
        u.setName(name);
        u.setEmail(email);
        userService.save(u);
        return "Saved";
    }

    @GetMapping(path="/users")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userService.returnAllUsers();
    }

    @PostMapping(path="/add")
    public @ResponseBody String addNewRealEstate (
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
        realEstateService.saveRealEstate(re);
        return "{\"status\":\"Saved\"}";
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
}
