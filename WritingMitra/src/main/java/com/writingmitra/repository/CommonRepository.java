
package com.writingmitra.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.writingmitra.mapper.FeedbackMapper;
import com.writingmitra.model.Feedback;

@Repository
public class CommonRepository {
    @Autowired 
	private JdbcTemplate jdbcTemplate;
    
//    public List<Feedback> fetchFeedback() {
//    	String sql="select * from feedback";
//    List<Feedback> feedbackList =jdbcTemplate.query(sql, new FeedbackMapper());
//    System.out.println(feedbackList);
//    System.out.println("below List");
//    return feedbackList;
//    }
		
    public List<Feedback> fetchFeedback() {
    	String sql="select u.name,f.rating,f.review,f.email from user u,feedback f where u.email=f.email  order by f.id desc limit 10";
    List<Feedback> feedbackList =jdbcTemplate.query(sql, new FeedbackMapper());
   
    
    return feedbackList;
    }
		
}
