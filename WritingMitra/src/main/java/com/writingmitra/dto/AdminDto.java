package com.writingmitra.dto;
//subset of admin model class

//dto is only required when we are using JPA for datbase connection in jdbc no need 
public class AdminDto {
private String name;
private String profilePic;
public String getProfilePic() {
	return profilePic;
}
public void setProfilePic(String profilePic) {
	this.profilePic = profilePic;
}
private String phone;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public AdminDto(String name, String phone) {
	
	this.name = name;
	this.phone = phone;
}
public AdminDto() {

	// TODO Auto-generated constructor stub
}


}
