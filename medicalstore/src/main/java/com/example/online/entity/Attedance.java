package com.example.online.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Attedance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	Date date;
	String employeeName;
	int userId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "Attedance [id=" + id + ", date=" + date + ", employeeName=" + employeeName + ", userId=" + userId + "]";
	}
	public Attedance(int id, Date date, String employeeName, int userId) {
		super();
		this.id = id;
		this.date = date;
		this.employeeName = employeeName;
		this.userId = userId;
	}
	public Attedance() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
	
}
