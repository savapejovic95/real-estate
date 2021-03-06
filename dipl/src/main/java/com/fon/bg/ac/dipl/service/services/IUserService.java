package com.fon.bg.ac.dipl.service.services;

import com.fon.bg.ac.dipl.domain.User;

import java.util.List;

public interface IUserService {

    User save(User user);

    List<User> returnAllUsers();

    User findById(int id);

    User findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User deleteUser(User user);
}
