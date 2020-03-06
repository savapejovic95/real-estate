package com.fon.bg.ac.dipl.repository;

import com.fon.bg.ac.dipl.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
