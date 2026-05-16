package com.writingmitra.mapper;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.writingmitra.model.Participation;
import com.writingmitra.model.User;

public class PartMapper implements RowMapper<Participation> {
	
		
		Participation particapate=null;

		@Override
		public Participation mapRow(ResultSet rs, int rowNum) throws SQLException {
			// TODO Auto-generated method stub
			
			String title=rs.getString("title");
			String compId=rs.getString("comp_id");
			
			int pid=rs.getInt("pid");
			Date date=rs.getDate("date");
			
			//	LocalDateTime lt=new LocalDateTimeDeserializer(date);
			String phone=rs.getString("phone_no");
			String email=rs.getString("email");
			String content=rs.getString("content");
			String userName=rs.getString("name");

			
			User us =new User();
			us.setName(userName);
			
			particapate=new Participation();
			particapate.setCompId(compId);;
			particapate.setContent(content);
			particapate.setPhoneNo(phone);
			particapate.setEmail(email);
			particapate.setTitle(title);
			particapate.setUser(us);
			particapate.setPid(pid);
			
		
	
			

		
			return particapate;
		
		

	}

}
