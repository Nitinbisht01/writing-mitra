package com.writingmitra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.Blog;

public interface BlogRepositry extends JpaRepository<Blog, Integer> {

	public List<Blog> findByEmail(String email);
}
