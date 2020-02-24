package com.fon.bg.ac.dipl.repository;

import com.fon.bg.ac.dipl.domain.User;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
public interface UserRepository extends CrudRepository<User, Integer> {

}
