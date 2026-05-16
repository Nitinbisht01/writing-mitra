package com.writingmitra.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.writingmitra.model.Feedback;
import com.writingmitra.model.User;

public class FeedbackMapper implements RowMapper<Feedback> {

	Feedback feedback=null;
	@Override
	public Feedback mapRow(ResultSet rs, int rowNum) throws SQLException {
//		String email=rs.getString("email");
//		String rating=rs.getString("rating");
//		String review=rs.getString("review");
//		
//		feedback =new Feedback(email, rating, review);
		
		
		//fetching from two tables at a time
		
		String email=rs.getString("email");
		String rating=rs.getString("rating");
		String review =rs.getString("review");
		String userName=rs.getString("name");
		
		User u=new User();
		u.setName(userName);
		
		feedback=new Feedback();
		feedback.setEmail(email);
		feedback.setRating(rating);
		feedback.setMessage(review);
		feedback.setUser(u);
		
		
		return feedback;
	}

}
