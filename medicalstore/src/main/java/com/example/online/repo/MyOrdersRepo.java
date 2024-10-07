package com.example.online.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.online.entity.MyOrders;


public interface MyOrdersRepo extends JpaRepository<MyOrders, Integer> {

}
