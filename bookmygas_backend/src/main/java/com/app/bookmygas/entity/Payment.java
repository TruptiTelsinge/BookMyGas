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
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

@Entity
@Table(name = "payment")
@Data
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentid")
    private Integer paymentId;

    @ManyToOne
    @JoinColumn(name = "orderid", nullable = false)
    private Order order;

    @Column(name = "paymentdate", nullable = false)
    @NotNull(message = "Payment date cannot be null")
    private LocalDateTime paymentDate;

    @Column(name = "amount", nullable = false)
    @Positive(message = "Amount must be positive")
    private Double amount;

    @Column(name = "paymentmethod")
    @Size(max = 20, message = "Payment method must be less than or equal to 20 characters")
    private String paymentMethod;

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
		
	}
}

