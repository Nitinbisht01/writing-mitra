package com.writingmitra.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.writingmitra.model.Blog;
import com.writingmitra.model.User;

public class BlogMapper implements RowMapper<Blog> {
	Blog blog=null;

	@Override
	public Blog mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		String email=rs.getString("email");
		String title=rs.getString("title");
		String category=rs.getString("category");
		String content=rs.getString("content");
		String userName=rs.getString("name");
		
		User us=new User();
		
		blog= new Blog();
		blog.setUser(us);
        blog.setCategory(category);
        blog.setEmail(email);
        blog.setTitle(title);	
        blog.setContent(content);
        us.setName(userName);
		
		return blog;
	}
	

}
