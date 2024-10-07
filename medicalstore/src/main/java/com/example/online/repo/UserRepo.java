package com.example.online.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.online.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	int countByUserName(String username);

	User findByUserName(String username);
}