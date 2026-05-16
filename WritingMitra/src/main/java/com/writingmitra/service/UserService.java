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
import com.writingmitra.model.Blog;
import com.writingmitra.model.CompetitionNotice;
import com.writingmitra.model.Feedback;
import com.writingmitra.model.Participation;
import com.writingmitra.model.User;
import com.writingmitra.repository.BlogRepositry;
import com.writingmitra.repository.FeedbackRepository;
import com.writingmitra.repository.NoticeRepository;
import com.writingmitra.repository.PartRepo;
import com.writingmitra.repository.ParticipateRepository;
import com.writingmitra.repository.UserRepositry;
import com.writingmitra.repository.UserRepositryR;


@Service

public class UserService {
	
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	

	 @Autowired
	 private UserRepositryR userRepositryR ;
	
	 
	 public User getProfile(String emial) {
		 Optional<User>opt=userRepositryR.findById(emial);
		 User user=null;
		 if(opt.isPresent()) {
			 user=opt.get();
			 
			 
		 }
		 return user;
	 }
	
	
	 public List<Blog> findByAuthor(String email){
		return blogRepositry.findByEmail(email);
	}
		 
		 
	
	

	 public String registration(User user) {
			 userRepositryR.save(user);
			 
			 return "Registration success";
			
		}
				public String addfeedback(Feedback feedback) {
			 feedbackRepository.save(feedback);
			 return "Feedback recived";
		
	}
		public String login(User user) {
			 String email=user.getEmail();
			 String password=user.getPassword();
			 
				
			 Optional<User>opt=userRepositryR.findById(email);
				String message="";
				if (opt.isPresent())
				{User us=opt.get();
				if(us.getPassword().equals(password))
					message= "success";
				else
					message="invalid password";
				
				}
				else {
					message= "invalid Email";
				}
				

			 return message;
}
		
		@Autowired
		private BlogRepositry blogRepositry;
		public String newBlog(Blog blog) {
			
			blogRepositry.save(blog);
			
			return "blog Saved successfully";
			
			
		}
		
		public void deleteBlog(Integer id) {
			blogRepositry.deleteById(id);
			
		}
		
		public User editProfile(User modifiedUser,String email) {
			Optional<User>opt=userRepositryR.findById(email);
			User us=null;
			if(opt.isPresent()) {
				us=opt.get();//overwrite the old data
				String modifiedName=modifiedUser.getName();
				String modifiedPhone=modifiedUser.getPhone();
				String modifiedCity=modifiedUser.getCity();
				
				us.setCity(modifiedCity);
				us.setName(modifiedName);
				us.setPhone(modifiedPhone);
				
				userRepositryR.save(us);
				
			}
			return us;
			
		}
		
		public Map<String,String> uploadPic(User user, MultipartFile imageFile) {
			String fileName=imageFile.getOriginalFilename();
			long timeStamp=System.currentTimeMillis()%100000000;
			
			String uniqueFileName=timeStamp+"_"+fileName;
			
			//path to route directory to asign file for saving uploaded file
			
			String projectRoot=System.getProperty("user.dir");
			System.out.println("project root is"+projectRoot);
			
			//reach to uplaodDirectory
			
			String uploadDir=projectRoot+"/uploads/userimages";
			// TODO Auto-generated method stub
			
			
			Map<String,String> imageMap=new HashMap<>();
			
			try {
				//method to save file
				File targetFile=new File(uploadDir,uniqueFileName);
				
				imageFile.transferTo(targetFile);
				
				//generating
				String IMAGEURL="http://localhost:8080/uploads/userimage/s"+uniqueFileName;
				
				String email=user.getEmail();
				Optional<User>opt=userRepositryR.findById(email);
				if(opt.isPresent()) {
					User us=opt.get();
					String desc=user.getUserDesc();
					
					us.setUserPic(uniqueFileName);

					us.setUserDesc(desc);
					userRepositryR.save(us);
					
					
					
				
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
		
		
		public String updatePassword(PasswordDto pd,String email) {
			String message=null;
			Optional<User>opt=userRepositryR.findById(email);
			if(opt.isPresent()) {
				User us=opt.get();
			String userOldPass=us.getPassword();//
						String reactuserPass=pd.getOldpass();
						if(userOldPass.equals(reactuserPass)) {
							us.setPassword(pd.getConfirmpass());
							userRepositryR.save(us);
							
							message= "Sucess";
						}
						message="error";
			}
			
			
			return message;
		}

		
		//to fetch all blogs
		@Autowired
		private UserRepositry userRepositry;
		public List<Blog> fetchBlog(String category){
			return userRepositry.fetchBlog(category);
		}

		@Autowired
		private NoticeRepository noticeRepository;
		public List<CompetitionNotice> fetchNotice(){
		return noticeRepository.findAll();
			
		}
		
		
		@Autowired
		private ParticipateRepository participateRepository;
		public String saveParticipation(Participation participate) {
			participateRepository.save(participate);
			return "Participation successful";
		}
		
		
		@Autowired private PartRepo partRepo;
		public List<Participation> winners(){
			return partRepo.fetchwinner();
		}
		
		public String checkemail(String email) {
			Optional<User>opt=userRepositryR.findById(email);
			if(opt.isPresent()) {
				return "exists";
			}
			else return "new email";
		}
		
		
}
