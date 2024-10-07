package com.example.online.controller;




import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.online.entity.Attedance;
import com.example.online.entity.Category;
import com.example.online.entity.Product;
import com.example.online.entity.addEmployee;
import com.example.online.projection.ProductUI;
import com.example.online.repo.AttandanceRepo;
import com.example.online.repo.CategoryRepo;
import com.example.online.repo.ProductRepo;
import com.example.online.repo.addEmployeeRepo;



@RestController
@CrossOrigin  //(origins = { "http://localhost:4200","http://3.93.19.80:8080/amazon"})  // Allow requests from this origin
@RequestMapping("admin")
public class AdminController {

	@Autowired
	CategoryRepo categoryRepo;
	
	@Autowired
	ProductRepo productRepo;
	
	@Autowired
	AttandanceRepo attandanceRepo;
	
	
	@Autowired 
	addEmployeeRepo addEmployeeRepo;

	@RequestMapping("getAllCategories")
	public List<Category> getAllCategories() {
		return categoryRepo.findAll();
	}

	@DeleteMapping("deleteCategory/{id}")
	public boolean deleteCategory(@PathVariable int id) {
		boolean status = false;
		if (id != 0) {
			status = true;
			categoryRepo.deleteById(id);
		}
		return status;
	}

	@RequestMapping("addNewCategory{userid}")
	public Category addNewCategory(@PathVariable int userid, @RequestBody String name) {
		Category c = new Category();
		c.setDate(new Date());
		c.setName(name);
		c.setUserId(userid);
		return categoryRepo.save(c);
	}
	
	
	//-----add product-------------------------------------------------------------------------------------------
	

	@RequestMapping("getAllProducts{userid}")
	public List<ProductUI> findByCategoryName(@PathVariable int userid) {
		return productRepo.findByCategoryName(userid);
	}

	@RequestMapping("addNewProduct")
	public Product addNewProduct(@RequestBody Product obj) {
		obj.setDate(new Date());
		return productRepo.save(obj);
	}	
	
	//----add employees------------------------------------------------------------------------------------------
	
	@RequestMapping("addemployees")
	public addEmployee addemployee(@RequestBody addEmployee addemployees) {
		addEmployee addempl=addEmployeeRepo.save(addemployees);
		return addempl;
	}	
	
	
	
	
	@RequestMapping("getEmployeess")
	public List<addEmployee> addemp(){
		List<addEmployee> emp=addEmployeeRepo.findAll();
		return emp;
	}
	
	
	//-attandance mark-----------------------------------------------------------------------------------
	
	@GetMapping("Attadance")
	public List<Attedance> att()
	{
		List<Attedance> atte=attandanceRepo.findAll();
		return atte;
	}
	
	
	
	
}