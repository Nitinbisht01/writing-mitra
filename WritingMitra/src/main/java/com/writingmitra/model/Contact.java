package com.writingmitra.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity//it will create a table with the name of class 
//Table(name="contact")
public class Contact {
	@Id //denote primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	
	private int id;
	
	
	
	public int getId() {
		return id;
	}

	private String name,email,phone,question;

	public Contact() {
		
		// TODO Auto-generated constructor stub
	}

	public Contact(String name, String email, String phone, String question) {
		
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.question = question;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

}
