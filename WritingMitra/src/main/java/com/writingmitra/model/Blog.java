package com.writingmitra.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Integer id;
    @Transient
    private User user;
    
    
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Blog() {
	
		// TODO Auto-generated constructor stub
	}
	@Column(name="email",nullable=false,length=100)
    private String email;
    @Column(name="title",nullable=false,length=150)
    private String title;
    @Column(name="category",nullable=false,length=150)
    private String category;
    @Column(name="content",nullable=false,length=150)
	private String content;
    @CreationTimestamp
    @Column(name="createdAt",nullable=false,updatable=false)
    private LocalDateTime  createdAtDate;
    @Column(name="updatedAt",nullable=false)
    @UpdateTimestamp
    private LocalDateTime updatedAt;
	public Blog( String email, String title, String category, String content) {
		
		
		this.email = email;
		this.title = title;
		this.category = category;
		this.content = content;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getId() {
		return id;
	}
	public LocalDateTime getCreatedAtDate() {
		return createdAtDate;
	}
	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

    
	
}
