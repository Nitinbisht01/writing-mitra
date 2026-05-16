package com.writingmitra.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.writingmitra.mapper.PartMapper;
import com.writingmitra.model.Participation;

@Repository
public class PartRepo {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public List<Participation> fetchpart(Integer id){
		
		
		String sql="Select p.pid, p.title,p.comp_id,p.content,p.email,p.pstatus,p.phone_no,p.date,u.name from user u,participation p where p.email=u.email and p.comp_id=? ";
		
		List<Participation> partList=null;
		try {
		
		 partList=jdbcTemplate.query(sql,new PartMapper(),id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return partList;
		
	}
	
	
	
public List<Participation> fetchwinner(){
		
		
		String sql="Select p.pid, p.title,p.comp_id,p.content,p.email,p.pstatus,p.phone_no,p.date,u.name from user u,participation p where p.email=u.email and p.winner_status='winner' ";
		
		List<Participation> partList=null;
		try {
		
		 partList=jdbcTemplate.query(sql,new PartMapper());
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return partList;
		
	}


}
