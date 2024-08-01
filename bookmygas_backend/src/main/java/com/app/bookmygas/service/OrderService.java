package com.app.bookmygas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.bookmygas.entity.Order;
import com.app.bookmygas.repository.OrderRepository;

@Service
public class OrderService {
	

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Integer id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id " + id));
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(Integer id, Order order) {
        if (orderRepository.existsById(id)) {
           order.setOrderId(id);
            return orderRepository.save(order);
        } else {
            throw new RuntimeException("Order not found with id " + id);
        }
    }

    public void deleteOrder(Integer id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
        } else {
            throw new RuntimeException("Order not found with id " + id);
        }
    }

}
