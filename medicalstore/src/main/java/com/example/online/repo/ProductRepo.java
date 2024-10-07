package com.example.online.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.online.entity.Product;
import com.example.online.projection.ProductUI;



public interface ProductRepo extends JpaRepository<Product, Integer> {
	
	
	List<Product> findByUserid(int id);

	@Query(value = "SELECT p.name,p.price,p.quantity,p.discount,p.description,c.cat_name as catName FROM product p join category c on p.categoryid=c.id where p.userid=?1", nativeQuery = true)
	List<ProductUI> findByCategoryName(int userId);
	

}