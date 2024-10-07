package com.example.online.entity;



import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MyOrders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String name;
	double price;

	Date date;
	int userid;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public MyOrders(int id, String name, double price, Date date, int userid) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.date = date;
		this.userid = userid;
	}
	@Override
	public String toString() {
		return "MyOrders [id=" + id + ", name=" + name + ", price=" + price + ", date=" + date + ", userid=" + userid
				+ "]";
	}
	public MyOrders() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
}
