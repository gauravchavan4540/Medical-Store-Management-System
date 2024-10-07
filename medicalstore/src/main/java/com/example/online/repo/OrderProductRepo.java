package com.example.online.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.online.entity.OrderProduct;


public interface OrderProductRepo extends JpaRepository<OrderProduct, Integer> {

}
