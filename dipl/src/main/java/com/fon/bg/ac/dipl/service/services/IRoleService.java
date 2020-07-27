package com.fon.bg.ac.dipl.service.services;

import com.fon.bg.ac.dipl.domain.ERole;
import com.fon.bg.ac.dipl.domain.Role;

public interface IRoleService {
    Role findByName(ERole name);
}
