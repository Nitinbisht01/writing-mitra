package com.writingmitra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.Admin;

public interface AdminRepositry extends JpaRepository<Admin, String>  {

}
