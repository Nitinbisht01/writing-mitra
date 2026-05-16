package com.writingmitra.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.Participation;

public interface ParticipateRepository extends JpaRepository<Participation, Integer> {

	public List<Participation> findByCompId(Integer id);
}
