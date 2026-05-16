package com.writingmitra.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Feedback {
	// only using here not making in Dtabase column only for local use
	@Transient
	User user;
	
	
	




	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	
	public int getId() {
		return id;
	}
	
	

	@Column(name="email",length = 45,nullable = false)
	private String email;
	@Column(name="rating",length = 5,nullable = false)
	private String rating;
	@Column(name="review",nullable=false)
	private String message;
	

	public Feedback() {
		
		// TODO Auto-generated constructor stub
	}

	public Feedback(String email, String rating, String message) {
		
		this.email = email;
		this.rating = rating;
		this.message = message;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
