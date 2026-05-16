package com.writingmitra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
