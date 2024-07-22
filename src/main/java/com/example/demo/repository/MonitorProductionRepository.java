package com.example.demo.repository;

import com.example.demo.model.MonitorProduction;
import com.example.demo.model.MonitorProductionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonitorProductionRepository extends JpaRepository<MonitorProduction, MonitorProductionId> {
}
