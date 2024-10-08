package com.example.online.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.online.entity.User;
import com.example.online.repo.UserRepo;



@RestController
@CrossOrigin  //(origins = { "http://localhost:4200","http://3.93.19.80:8080/amazon"}) // Allow requests from all origins for testing purposes
@RequestMapping("signup")
public class SignupController {


	@Autowired
	private UserRepo userRepo;

	@PostMapping("register")
	public User registerUser(@RequestBody User user) {
		return userRepo.save(user);
	}
}
