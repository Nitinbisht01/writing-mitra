package com.writingmitra.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.writingmitra.mapper.BlogMapper;
import com.writingmitra.model.Blog;
import com.writingmitra.model.Feedback;
import com.writingmitra.model.User;

@Repository
public class UserRepositry {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public List<Blog> fetchBlog(String category){
		
		
		String sql="Select b.title,b.category,b.content,b.email,u.name from user u,blog b where b.email=u.email and b.category=? ";
		
		List<Blog> blogList=null;
		try {
		
		 blogList=jdbcTemplate.query(sql,new BlogMapper(),category);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return blogList;
		
	}
	
	
	
}
