package com.writingmitra.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
	
	
	
	
@Column(name="name",length=100,nullable=false)	
private String name;
@Id
@Column(name="email",length=100,nullable=false,unique=true)	
private String email;

@Column(name="phone",length=10,nullable=false)	
private String phone;
@Column(name="password",length=40,nullable=false)	
private String password;
@Column(name="city",length=30,nullable=false)	
private String city;

private String userPic,userDesc;



public String getUserPic() {
	return userPic;
}


public void setUserPic(String userPic) {
	this.userPic = userPic;
}


public String getUserDesc() {
	return userDesc;
}


public void setUserDesc(String userDesc) {
	this.userDesc = userDesc;
}


public User() {
	
	// TODO Auto-generated constructor stub
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

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}


}
