package com.writingmitra.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CompetitionNotice {
 private String title;
 private String openingdate;
 private String closingdate;
 
 private String rules;
 private String description;
 @Id 
 @GeneratedValue(strategy = GenerationType.IDENTITY) 
 private int id;
 public String getTitle() {
	return title;
 }
 public void setTitle(String title) {
	this.title = title;
 }
 public String getOpeningdate() {
	return openingdate;
 }
 public void setOpeningdate(String openingdate) {
	this.openingdate = openingdate;
 }
 public String getClosingdate() {
	return closingdate;
 }
 public void setClosingdate(String closingdate) {
	this.closingdate = closingdate;
 }
 public String getRules() {
	return rules;
 }
 public void setRules(String rules) {
	this.rules = rules;
 }
 public String getDescription() {
	return description;
 }
 public void setDescription(String description) {
	this.description = description;
 }
 public int getId() {
	return id;
 }
 public CompetitionNotice() {
	
	// TODO Auto-generated constructor stub
 }
 public CompetitionNotice(String title, String openingdate, String closingdate, String rules, String description) {
	super();
	this.title = title;
	this.openingdate = openingdate;
	this.closingdate = closingdate;
	this.rules = rules;
	this.description = description;
 }
 
 
 
 
 
 
 

}
