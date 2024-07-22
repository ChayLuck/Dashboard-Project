package com.example.demo.repository;

import com.example.demo.model.MonitorOee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonitorOeeRepository extends JpaRepository<MonitorOee, String> {
}
