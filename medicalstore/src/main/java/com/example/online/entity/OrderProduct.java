package com.example.online.entity;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OrderProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	int orderid;
	String name;
	int productid;
	double price;
	int quantity;
	Date date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public OrderProduct(int id, int orderid, String name, int productid, double price, int quantity, Date date) {
		super();
		this.id = id;
		this.orderid = orderid;
		this.name = name;
		this.productid = productid;
		this.price = price;
		this.quantity = quantity;
		this.date = date;
	}
	@Override
	public String toString() {
		return "OrderProduct [id=" + id + ", orderid=" + orderid + ", name=" + name + ", productid=" + productid
				+ ", price=" + price + ", quantity=" + quantity + ", date=" + date + "]";
	}
	public OrderProduct() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
		
	
}
