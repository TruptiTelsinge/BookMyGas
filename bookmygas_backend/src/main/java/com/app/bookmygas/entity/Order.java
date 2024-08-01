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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderid")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "agencyid")
    private GasAgency gasAgency;

    @Column(name = "orderdate")
    @NotNull(message = "Order date cannot be null")
    private LocalDateTime orderDate;

    @Column(name = "deliverydate")
    private LocalDateTime deliveryDate;

    @Column(name = "status")
    @Size(max = 20, message = "Status must be less than or equal to 20 characters")
    private String status;

    @Column(name = "gastype")
    @Size(max = 20, message = "Gas type must be less than or equal to 20 characters")
    private String gasType;

    @Column(name = "quantity")
    @Positive(message = "Quantity must be positive")
    private Integer quantity;

    @Column(name = "totalprice")
    @Positive(message = "Total price must be positive")
    private Double totalPrice;

	public void setOrderId(Integer id) {
		this.orderId = id;
		
	}
}
