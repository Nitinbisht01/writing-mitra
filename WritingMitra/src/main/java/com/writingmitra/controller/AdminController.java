package com.writingmitra.controller;
import com.writingmitra.service.CommonService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.writingmitra.dto.AdminDto;
import com.writingmitra.dto.PasswordDto;
import com.writingmitra.model.Admin;
import com.writingmitra.model.CompetitionNotice;
import com.writingmitra.model.Contact;
import com.writingmitra.model.Feedback;
import com.writingmitra.model.Participation;
import com.writingmitra.model.User;
import com.writingmitra.service.AdminService;

@RestController
@CrossOrigin("*")

@RequestMapping("/admin")
public class AdminController {

   
	
private AdminService adminService;

@Autowired
public AdminController(AdminService adminService) {
	this.adminService=adminService;
	
}
@PostMapping("/adminLogin")
public String login(@RequestBody Admin admin) {
	return adminService.adminLogin(admin);


}

@GetMapping("/adminProfile/{email}")
public ResponseEntity<AdminDto> adminProfile(@PathVariable String email)
{
	Admin admin=adminService.getProfile(email);
	
	AdminDto dto=null;
	
	if(admin!=null) {
		//creating object of dto class
		
		dto=new AdminDto(admin.getName(),admin.getPhone());
		dto.setProfilePic(admin.getProfilePic());
		
		return ResponseEntity.ok(dto);
	}
	else {
		return new ResponseEntity<AdminDto>(dto,HttpStatus.NOT_FOUND);
	}
}



//to fetch all contact data
@GetMapping("/allContacts")
public ResponseEntity<List<Contact>> allContact(){
	
   List<Contact>contactList=adminService.allContacts();
       if(contactList.size()>0)
    	   return ResponseEntity.ok(contactList);
       else
    	   return ResponseEntity.notFound().build();
}

@GetMapping("/allFeedback")
public ResponseEntity<List<Feedback>> allFeedback(){

	List<Feedback> feedbackList=adminService.allFeedback();
	if(feedbackList.size()>0) {
		return ResponseEntity.ok(feedbackList);
	}
	else {
		return ResponseEntity.notFound().build();
	}
}
@GetMapping("/allUsers")
public ResponseEntity<List<User>> allUser(){
	List<User> userList= adminService.allUser();
	if(userList.size()>0) {
		return ResponseEntity.ok(userList);
	}
	else {
		return ResponseEntity.notFound().build();
	}
}


//api for deletion
@DeleteMapping("/deleteContact/{id}")
public ResponseEntity<String> deleteContact(@PathVariable Integer id){
	adminService.deleteContact(id);
	
	return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
}


@PutMapping("/editProfile/{email}")
public ResponseEntity<Admin>editProfile(@RequestBody Admin admin,@PathVariable String email){
	Admin adminobj=adminService.editProfile(admin, email);
	if(adminobj!=null)
	return new  ResponseEntity<Admin>(adminobj,HttpStatus.OK);
	else 
		return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
}


//api for update password
@PatchMapping("/updatePassword/{email}")
public String updatePassword(@RequestBody PasswordDto pd,@PathVariable String email) {
	String message=adminService.updatePassword(pd, email);
	return message;
}

//api for image upload 
@PostMapping("/uploadPic")
public ResponseEntity<Map<String,String>> uploadPic(@RequestPart("profileImageDetail")Admin admin,@RequestPart("imageFile")MultipartFile imageFile) {
	System.out.println(admin.getDescription());
	System.out.println(imageFile.getOriginalFilename());
	

	
	
	Map <String,String>imageMap=adminService.uploadPic(admin, imageFile);
	
	return ResponseEntity.ok(imageMap);
}

// the notice Saving 
@PostMapping("/notice/{email}")
public String notice(@RequestBody CompetitionNotice notice) {
	return adminService.addNotice(notice);
}


@GetMapping("/allcompetition")
 public ResponseEntity<List<CompetitionNotice>> allcompetition()  {
	List<CompetitionNotice> comp=adminService.allcompetition();
	return ResponseEntity.ok(comp);
	
}

@GetMapping("/participants/{id}")
public ResponseEntity<List<Participation>> allParticipation(@PathVariable int id){
	List<Participation> par=adminService.showParticipant(id);
	return ResponseEntity.ok(par);
	
}

@PatchMapping("/winner/{id}")
public ResponseEntity<String> makeWinner(@PathVariable Integer id) {
  String pd=  adminService.updatewinner(id);
    return ResponseEntity.ok(pd);
}
}
