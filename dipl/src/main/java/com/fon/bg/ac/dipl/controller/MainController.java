package com.fon.bg.ac.dipl.controller;

import com.fon.bg.ac.dipl.domain.User;
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

    @PostMapping(path="/add-user") // Map ONLY POST Requests
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
}