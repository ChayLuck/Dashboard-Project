package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.IdClass;
import jakarta.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
@IdClass(MonitorProductionId.class)
public class MonitorProduction {
    @Id
    private String lineCode;
    @Id
    private Date prodDate;
    private Double prodQuantity;

    // No-argument constructor (required by JPA)
    public MonitorProduction() {}

    // Constructor with arguments
    public MonitorProduction(String lineCode, Date prodDate, Double prodQuantity) {
        this.lineCode = lineCode;
        this.prodDate = prodDate;
        this.prodQuantity = prodQuantity;
    }

    // Getter and Setter methods
    public String getLineCode() {
        return lineCode;
    }

    public void setLineCode(String lineCode) {
        this.lineCode = lineCode;
    }

    public Date getProdDate() {
        return prodDate;
    }

    public void setProdDate(Date prodDate) {
        this.prodDate = prodDate;
    }

    public Double getProdQuantity() {
        return prodQuantity;
    }

    public void setProdQuantity(Double prodQuantity) {
        this.prodQuantity = prodQuantity;
    }
}


