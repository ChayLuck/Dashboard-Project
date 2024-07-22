package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;

@Entity
@IdClass(MonitorStoppageId.class)
public class MonitorStoppage {
    @Id
    private String lineCode;
    @Id
    private String stopReason;
    private Double stopDuration;

    // No-argument constructor (required by JPA)
    public MonitorStoppage() {}

    // Constructor with arguments
    public MonitorStoppage(String lineCode, String stopReason, Double stopDuration) {
        this.lineCode = lineCode;
        this.stopReason = stopReason;
        this.stopDuration = stopDuration;
    }

    // Getter and Setter methods
    public String getLineCode() {
        return lineCode;
    }

    public void setLineCode(String lineCode) {
        this.lineCode = lineCode;
    }

    public String getStopReason() {
        return stopReason;
    }

    public void setStopReason(String stopReason) {
        this.stopReason = stopReason;
    }

    public Double getStopDuration() {
        return stopDuration;
    }

    public void setStopDuration(Double stopDuration) {
        this.stopDuration = stopDuration;
    }
}

