package com.app.bookmygas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.bookmygas.entity.ConnectionRequest;
import com.app.bookmygas.entity.Order;
import com.app.bookmygas.entity.Vendor;
import com.app.bookmygas.service.ConnectionService;
import com.app.bookmygas.service.OrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/connections")
public class ConnectionController {

    @Autowired
    private ConnectionService connectionRequestService;

    @PostMapping
    public ResponseEntity<ConnectionRequest> createConnectionRequest(@Valid @RequestBody ConnectionRequest request) {
        ConnectionRequest createdRequest = connectionRequestService.createConnectionRequest(request);
        return new ResponseEntity<>(createdRequest, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConnectionRequest> getConnectionRequestById(@PathVariable Integer id) {
        ConnectionRequest request = connectionRequestService.getConnectionRequestById(id);
        return request != null ? new ResponseEntity<>(request, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<ConnectionRequest>> getAllConnectionRequests() {
        List<ConnectionRequest> requests = connectionRequestService.getAllConnectionRequests();
        return new ResponseEntity<>(requests, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ConnectionRequest> updateConnectionRequest(@PathVariable Integer id, @Valid @RequestBody ConnectionRequest request) {
        ConnectionRequest updatedRequest = connectionRequestService.updateConnectionRequest(id, request);
        return updatedRequest != null ? new ResponseEntity<>(updatedRequest, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConnectionRequest(@PathVariable Integer id) {
        boolean isDeleted = connectionRequestService.deleteConnectionRequest(id);
        return isDeleted ? new ResponseEntity<>(HttpStatus.NO_CONTENT) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}