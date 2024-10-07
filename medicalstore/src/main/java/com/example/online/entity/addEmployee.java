package com.example.online.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class addEmployee {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	int id;
	String employeename;
	String address;
	String qualification;
	byte age;
	long salary;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmployeename() {
		return employeename;
	}
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public byte getAge() {
		return age;
	}
	public void setAge(byte age) {
		this.age = age;
	}
	public long getSalary() {
		return salary;
	}
	public void setSalary(long salary) {
		this.salary = salary;
	}
	public addEmployee(int id, String employeename, String address, String qualification, byte age, long salary) {
		super();
		this.id = id;
		this.employeename = employeename;
		this.address = address;
		this.qualification = qualification;
		this.age = age;
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "addEmployee [id=" + id + ", employeename=" + employeename + ", address=" + address + ", qualification="
				+ qualification + ", age=" + age + ", salary=" + salary + "]";
	}
	public addEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
}
