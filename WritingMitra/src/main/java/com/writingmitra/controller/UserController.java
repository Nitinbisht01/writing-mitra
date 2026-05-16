package com.writingmitra.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.writingmitra.dto.AdminDto;
import com.writingmitra.dto.PasswordDto;
import com.writingmitra.dto.UserDto;
import com.writingmitra.model.Admin;
import com.writingmitra.model.Blog;
import com.writingmitra.model.CompetitionNotice;
import com.writingmitra.model.Feedback;
import com.writingmitra.model.Participation;
import com.writingmitra.model.User;
import com.writingmitra.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
	
	private UserService userService;
	@Autowired
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@PostMapping("/addfeedback")
	public String addfeedback(@RequestBody Feedback feedback) {
		//TODO: process POST request
		return userService.addfeedback(feedback);
		
	}
	
	//blog related work
	@PostMapping("/newBlog")
     public String newBlog(@RequestBody Blog blog) {
		return userService.newBlog(blog);
	}
	
	@DeleteMapping("/deleteBlog/{id}")
	public ResponseEntity<String> deleteBlog(@PathVariable Integer id) {
		userService.deleteBlog(id);
		return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
	}
	
	
	
	//user related work
	
	@PostMapping("/registration")
	public String registration(@RequestBody User user) {
		//TODO: process POST request
		return userService.registration(user);
	}
	
	@PostMapping("/userLogin")
		public String login(@RequestBody User user) {
			return userService.login(user);  
		}
	
	
	//for fetching data by database and sending to frontend on a selected query
	@GetMapping("/userProfile/{email}")
	public ResponseEntity<UserDto> userProfile(@PathVariable String email){
		User user=userService.getProfile(email);
		UserDto dto=null;
		if (user!=null) {
			dto=new UserDto(user.getName(),user.getPhone(),user.getCity());
			dto.setUserPic(user.getUserPic());
			dto.setUserDesc(user.getUserDesc());
			return ResponseEntity.ok(dto);
		}
		else {
			return new ResponseEntity<UserDto>(dto,HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PutMapping("/userEditedProfile/{email}")
	public ResponseEntity<User>userEditProfile(@RequestBody User user, @PathVariable String email){
		User userObj=userService.editProfile(user, email);
		if(userObj!=null) {
			return new ResponseEntity<User>(userObj,HttpStatus.OK);
			
		}
		else
		{
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PatchMapping("/updateUserPassword/{email}")
	public String updatePassword(@RequestBody PasswordDto pd,@PathVariable String email) {
		String message=userService.updatePassword(pd, email);
		return message;
	}
	
	@GetMapping("/search/{category}")	
	public ResponseEntity<List<Blog>> fetchBlog(@PathVariable String category){
		
		
		List<Blog> b= userService.fetchBlog(category);
		return ResponseEntity.ok(b);
	
	}
	@GetMapping("/se/{email}")
	public ResponseEntity<List<Blog>>findByAuthor(@PathVariable String email){
		List<Blog> b =userService.findByAuthor(email);
		return ResponseEntity.ok(b);
		
	}

	
	@GetMapping("/notice")
	public ResponseEntity<List<CompetitionNotice>> fetchNotice(){
		List<CompetitionNotice> c=userService.fetchNotice();
		return ResponseEntity.ok(c);
		
		
	}
	
	@PostMapping("/participate/{email}")
	public String saveParticipation(@RequestBody Participation participate){
		return userService.saveParticipation(participate);
		
	}
	
	@GetMapping("/winner")
	public ResponseEntity<List<Participation>> winners(){
		List<Participation> pt=userService.winners();
		return ResponseEntity.ok(pt);
	}
	
	//check for email existance
	@GetMapping("/checkemail/{email}")
	public String checkemail(@PathVariable String email) {
		return userService.checkemail(email);
	}
	
	
	@PostMapping("/uploadPic")
	public ResponseEntity<Map<String,String>> uploadPic(@RequestPart("userImageDetail")User user,@RequestPart("imageFile")MultipartFile imageFile) {
		System.out.println(user.getUserDesc());
		System.out.println(imageFile.getOriginalFilename());
		

		
		
		Map <String,String>imageMap=userService.uploadPic(user, imageFile);
		
		return ResponseEntity.ok(imageMap);
	}
}
		
	

