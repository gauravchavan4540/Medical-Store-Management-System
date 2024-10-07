package com.example.online.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.online.entity.Attedance;
import com.example.online.entity.Category;

public interface AttandanceRepo extends JpaRepository<Attedance, Integer> {


}
