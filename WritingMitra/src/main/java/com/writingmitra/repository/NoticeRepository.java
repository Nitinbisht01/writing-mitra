package com.writingmitra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.writingmitra.model.CompetitionNotice;

public interface NoticeRepository extends JpaRepository<CompetitionNotice,Integer>{

}
