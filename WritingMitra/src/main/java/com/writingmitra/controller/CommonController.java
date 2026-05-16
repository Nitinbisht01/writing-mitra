package com.writingmitra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.writingmitra.model.Contact;
import com.writingmitra.model.Feedback;
import com.writingmitra.service.CommonService;


@RestController
//@RequestMapping("/common")
//@CrossOrigin({"http://localhost:5173"})
@CrossOrigin("*")
public class CommonController {
	
	private CommonService commonService;
	
	@Autowired
	public CommonController(CommonService commonService) {
		
		this.commonService = commonService;
	}


	@PostMapping("/addContact")
	public String addContact(@RequestBody Contact contact) {

//		

	return commonService.addContact(contact);//response from service to react server
	
		
		
	}
	
	@GetMapping("/fetchFeedback")
    public ResponseEntity<List<Feedback>> fetchFeedback(){
		
    List<Feedback>fList= commonService.fetchFeedback();
    System.out.println(fList);
    return ResponseEntity.ok(fList);
    
    
    
    }

}
