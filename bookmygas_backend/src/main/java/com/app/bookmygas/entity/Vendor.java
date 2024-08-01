package com.app.bookmygas.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Set;

@Entity
@Table(name = "vendor")
@Data
@NoArgsConstructor
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vendorid")
    private Integer vendorId;

    @Column(name = "vendorname", nullable = false)
    @NotBlank(message = "Vendor name cannot be blank")
    @Size(max = 100, message = "Vendor name must be less than or equal to 100 characters")
    private String vendorName;

    @Column(name = "contactnumber")
    @Size(max = 15, message = "Contact number must be less than or equal to 15 characters")
    private String contactNumber;

    @Column(name = "email", nullable = false, unique = true)
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Email should be valid")
    @Size(max = 100, message = "Email must be less than or equal to 100 characters")
    private String email;

    @OneToMany(mappedBy = "vendor")
    private Set<GasAgency> gasAgencies;

	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
		
	}
}

