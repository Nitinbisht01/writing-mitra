package com.writingmitra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.Contact;

public interface ContactRepositry extends JpaRepository<Contact, Integer> {

	
}
