package com.fon.bg.ac.dipl.controller;

import com.fon.bg.ac.dipl.domain.User;
import com.fon.bg.ac.dipl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/real-estate")
public class MainController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add-user") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (
            @RequestParam String name,
            @RequestParam String email) {

        User u = new User();
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
