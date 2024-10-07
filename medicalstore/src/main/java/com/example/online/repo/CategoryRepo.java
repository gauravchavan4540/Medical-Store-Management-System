package com.example.online.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.online.entity.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer>{

}
