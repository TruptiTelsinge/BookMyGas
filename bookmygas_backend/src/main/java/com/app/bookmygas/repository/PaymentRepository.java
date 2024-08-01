package com.app.bookmygas.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.bookmygas.entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    // Custom query methods can be added here if needed
}
