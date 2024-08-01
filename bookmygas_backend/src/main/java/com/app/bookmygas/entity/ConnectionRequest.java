package com.app.bookmygas.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "connectionrequest")
@Data
@NoArgsConstructor
public class ConnectionRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "requestid")
    private Integer requestId;

    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "agencyid", nullable = false)
    private GasAgency gasAgency;

    @Column(name = "requestdate", nullable = false)
    @NotNull(message = "Request date cannot be null")
    private LocalDateTime requestDate;

    @Column(name = "status")
    @Size(max = 20, message = "Status must be less than or equal to 20 characters")
    private String status;

	public void setRequestId(int requestId) {
		this.requestId = requestId;
		
	}
}

