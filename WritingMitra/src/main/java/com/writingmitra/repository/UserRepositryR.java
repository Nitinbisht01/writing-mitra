package com.writingmitra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.User;

public interface UserRepositryR extends JpaRepository<User, String> 
{

}
