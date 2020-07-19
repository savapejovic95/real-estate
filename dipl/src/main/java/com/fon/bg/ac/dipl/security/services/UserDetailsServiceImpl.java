package com.fon.bg.ac.dipl.security.services;

import com.fon.bg.ac.dipl.domain.User;
import com.fon.bg.ac.dipl.service.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private IUserService userService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userService.findByUsername(username);
		if(user == null){
			throw new UsernameNotFoundException("User Not Found with username: " + username);
		}

		return UserDetailsImpl.build(user);
	}

}
