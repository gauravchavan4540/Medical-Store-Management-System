package com.example.online.repo;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.online.entity.Cart;



public interface CartRepo extends JpaRepository<Cart, Integer> {


	
	int countByProductidAndUserid(int productid, int userid);

	List<Cart> findByUserid(int userid);

	int countByUserid(int userid);

//	Optional<Cart> findByProductidAndUserid(int productid, int userid);
	
	List<Cart> findByProductidAndUserid(int productid, int userid);
	
}

