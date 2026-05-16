package com.writingmitra.service;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.writingmitra.dto.PasswordDto;
import com.writingmitra.model.Admin;
import com.writingmitra.model.CompetitionNotice;
import com.writingmitra.model.Contact;
import com.writingmitra.model.Feedback;
import com.writingmitra.model.Participation;
import com.writingmitra.model.User;
import com.writingmitra.repository.AdminRepositry;
import com.writingmitra.repository.ContactRepositry;
import com.writingmitra.repository.FeedbackRepository;
import com.writingmitra.repository.NoticeRepository;
import com.writingmitra.repository.PartRepo;
import com.writingmitra.repository.ParticipateRepository;
import com.writingmitra.repository.UserRepositryR;


@Service
public class AdminService {
	@Autowired
private AdminRepositry adminRepositry;
	
	
	//method for deleting contact
	
	public void deleteContact(Integer id) {
		contactRepositry.deleteById(id);
		
	}
	
	//Api for delete contact
	
	
	@Autowired
	private ContactRepositry contactRepositry;
	
	@Autowired
	private NoticeRepository noticeRepository;
	
	public List<Contact> allContacts() 
	{
      return contactRepositry.findAll();   //it is same as select* from contact
	}
	
	@Autowired
	private FeedbackRepository feedbackRepositry;
	
	public List<Feedback> allFeedback(){
		return feedbackRepositry.findAll();
	}
	
	@Autowired
	private UserRepositryR userRepositryR;
	public List<User> allUser()
	{
		return userRepositryR.findAll();
	
	}	
	
	
	public String addNotice(CompetitionNotice notice) {
		
		noticeRepository.save(notice);
		return "Notice Saved Successfully";
		
	}
	
	public List<CompetitionNotice> allcompetition(){
		return noticeRepository.findAll();
	}
	@Autowired
	private PartRepo partRepo;
	public List<Participation> showParticipant(Integer id){
		return partRepo.fetchpart(id);
	}
	
	
	
	
	
	
	public Admin getProfile(String email) {
		Optional<Admin>opt=adminRepositry.findById(email);
		Admin admin=null;
		if(opt.isPresent()) {
			admin= opt.get();
		}
		return admin;
	}
	
	
	
	

	




//select*from admin where email=admin.getEmail()
	public String adminLogin(Admin admin) {
		String email=admin.getEmail();
		String password=admin.getPassword();
		
		Optional<Admin>opt=adminRepositry.findById(email);
		String message="";
		if (opt.isPresent())
		{Admin ad=opt.get();
		if(ad.getPassword().equals(password))
			message= "success";
		else
			message="invalid password";
		
		}
		else {
			message= "invalid Email";
		}
		
		
//.findById(null);
		
			return message;
	}
	
	public Admin editProfile(Admin modifiedAdminObject,String email) {
		Optional<Admin>opt= adminRepositry.findById(email);
		Admin ad=null;
		if(opt.isPresent()) {
			ad=opt.get();//overwrite old  data with modified
			String modifiedName=modifiedAdminObject.getName();
			String modifiedPhone=modifiedAdminObject.getPhone();
			//String modifiedPassword=modifiedAdminObject.getPassword();
			
			ad.setName(modifiedName);
			ad.setPhone(modifiedPhone);
			//ad.setPassword(modifiedPassword);
			adminRepositry.save(ad);
			
			
			
			
		}
		return ad;
	}

	//method for password updation
	public String updatePassword(PasswordDto pd,String email) {
		String message=null;
		Optional<Admin>opt=adminRepositry.findById(email);
		if(opt.isPresent()) {
			Admin ad=opt.get();
		String adminOldPass=ad.getPassword();//
					String reactPass=pd.getOldpass();
					if(adminOldPass.equals(reactPass)) {
						ad.setPassword(pd.getConfirmpass());
						adminRepositry.save(ad);
						
						message= "Sucess";
					}
					message="error";
		}
		
		
		return message;
	}







	public Map<String,String> uploadPic(Admin admin, MultipartFile imageFile) {
		String fileName=imageFile.getOriginalFilename();
		long timeStamp=System.currentTimeMillis()%100000000;
		
		String uniqueFileName=timeStamp+"_"+fileName;
		
		//path to route directory to asign file for saving uploaded file
		
		String projectRoot=System.getProperty("user.dir");
		System.out.println("project root is"+projectRoot);
		
		//reach to uplaodDirectory
		
		String uploadDir=projectRoot+"/uploads/profileimages";
		// TODO Auto-generated method stub
		
		
		Map<String,String> imageMap=new HashMap<>();
		
		try {
			//method to save file
			File targetFile=new File(uploadDir,uniqueFileName);
			
			imageFile.transferTo(targetFile);
			
			//generating
			String IMAGEURL="http://localhost:8080/uploads/profileimages/"+uniqueFileName;
			
			String email=admin.getEmail();
			Optional<Admin>opt=adminRepositry.findById(email);
			if(opt.isPresent()) {
				Admin ad=opt.get();
				String desc=admin.getDescription();
				
				ad.setProfilePic(uniqueFileName);

				ad.setDescription(desc);
				adminRepositry.save(ad);
				
			
				imageMap.put("imageURL",IMAGEURL );
				imageMap.put("email", email);
				
			
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			System.out.println("image upload failed");
		}
		return imageMap;
	}

	@Autowired ParticipateRepository particpateRepository;

	public String updatewinner(Integer id) {
		
		Optional<Participation> opt=particpateRepository.findById(id);
		Participation pd=null;
		if(opt.isPresent()) {
			pd=opt.get();
			pd.setWinnerStatus("winner");
			particpateRepository.save(pd);
		}
		if(pd!=null) {
			return "success";
		}
		// TODO Auto-generated method stub
		return "error";
	}
}
