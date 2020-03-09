package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.User;
import com.fon.bg.ac.dipl.repository.UserRepository;
import com.fon.bg.ac.dipl.service.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> returnAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User returnUserById(int id) {
        List<User> allUsers = returnAllUsers();
        for (User user : allUsers) {
            if(user.getId().equals(id)) {
                return user;
            }
        }
        return null;
    }
}