package com.fon.bg.ac.dipl.service.impl;

import com.fon.bg.ac.dipl.domain.ERole;
import com.fon.bg.ac.dipl.domain.Role;
import com.fon.bg.ac.dipl.repository.RoleRepository;
import com.fon.bg.ac.dipl.service.services.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements IRoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role findByName(ERole name) {
        List<Role> roles = roleRepository.findAll();
        for (Role role : roles) {
            if(role.getName().equals(name)){
                return role;
            }
        }
        return null;
    }
}
