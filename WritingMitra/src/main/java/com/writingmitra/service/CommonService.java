package com.writingmitra.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.writingmitra.model.Contact;
import com.writingmitra.model.Feedback;
import com.writingmitra.repository.CommonRepository;
import com.writingmitra.repository.ContactRepositry;

@Service
public class CommonService {

	private ContactRepositry contactRepositry;
	
	@Autowired
	public CommonService(ContactRepositry contactRepositry) {
		
		this.contactRepositry = contactRepositry;
	}


	public String addContact(Contact contact)
	{
	 contactRepositry.save(contact);//ORm
	 
	 
	 return "contact added succesfully";//fr4om repo to controller
	}
	
	@Autowired
	private CommonRepository commonRepository;
	// view feedback
	public List<Feedback>fetchFeedback(){
		return commonRepository.fetchFeedback();
	}
	
	
}
