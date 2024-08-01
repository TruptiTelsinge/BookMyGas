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

@Entity
@Table(name = "stock")
@Data
@NoArgsConstructor
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stockid")
    private Integer stockId;

    @ManyToOne
    @JoinColumn(name = "agencyid", nullable = false)
    private GasAgency gasAgency;

    @Column(name = "gastype", nullable = false)
    @NotBlank(message = "Gas type cannot be blank")
    @Size(max = 20, message = "Gas type must be less than or equal to 20 characters")
    private String gasType;

    @Column(name = "quantityavailable", nullable = false)
    @NotNull(message = "Quantity available cannot be null")
    @Positive(message = "Quantity available must be positive")
    private Integer quantityAvailable;

	public void setStockId(int stockId) {
		this.stockId = stockId;
		
	}
}
