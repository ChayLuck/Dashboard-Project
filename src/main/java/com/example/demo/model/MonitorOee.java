package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "monitor_oee")
public class MonitorOee {
    @Id
    private String lineCode;
    private String lineExplanation;
    private Double oeeRate;
    private Double performanceRate;
    private Double qualityRate;
    private Double availabilityRate;

    // No-argument constructor (required by JPA)
    public MonitorOee() {}

    // Constructor with arguments
    public MonitorOee(String lineCode, String lineExplanation, Double oeeRate, Double performanceRate, Double qualityRate, Double availabilityRate) {
        this.lineCode = lineCode;
        this.lineExplanation = lineExplanation;
        this.oeeRate = oeeRate;
        this.performanceRate = performanceRate;
        this.qualityRate = qualityRate;
        this.availabilityRate = availabilityRate;
    }

    // Getter and Setter methods
    public String getLineCode() {
        return lineCode;
    }

    public void setLineCode(String lineCode) {
        this.lineCode = lineCode;
    }

    public String getLineExplanation() {
        return lineExplanation;
    }

    public void setLineExplanation(String lineExplanation) {
        this.lineExplanation = lineExplanation;
    }

    public Double getOeeRate() {
        return oeeRate;
    }

    public void setOeeRate(Double oeeRate) {
        this.oeeRate = oeeRate;
    }

    public Double getPerformanceRate() {
        return performanceRate;
    }

    public void setPerformanceRate(Double performanceRate) {
        this.performanceRate = performanceRate;
    }

    public Double getQualityRate() {
        return qualityRate;
    }

    public void setQualityRate(Double qualityRate) {
        this.qualityRate = qualityRate;
    }

    public Double getAvailabilityRate() {
        return availabilityRate;
    }

    public void setAvailabilityRate(Double availabilityRate) {
        this.availabilityRate = availabilityRate;
    }
}

