-- Create database
CREATE DATABASE gas_booking_system;
USE gas_booking_system;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20),
    role VARCHAR(50),
    order_history JSON
);

-- Insert initial data
-- Insert users
INSERT INTO users (first_name, last_name, email, password, address, phone, role, order_history)
VALUES 
('John', 'Doe', 'john@gmail.com', 'hashed_password', '123 Main St', '1234567890', 'user', '[]'),
('Alice', 'Johnson', 'alice@gmail.com', 'hashed_password', '456 Elm St', '1231231234', 'admin', '[]');

-- Agencies Table
CREATE TABLE agencies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES users(id)
);

-- Insert initial data
-- Insert agencies
INSERT INTO agencies (name, address, phone, email, manager_id)
VALUES 
('Bharat Gas Agency', '789 Maple St', '1112223333', 'agency1@example.com', NULL),
('Agency Two', '101 Pine St', '4445556666', 'agency2@example.com', NULL);

-- Staff Table
CREATE TABLE staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(50),
    agency_id INT,
    FOREIGN KEY (agency_id) REFERENCES agencies(id)
);

-- Insert initial data
-- Insert staff
INSERT INTO staff (name, email, password, phone, role, agency_id)
VALUES 
('Alice Johnson', 'alice@example.com', 'hashed_password', '1231231234', 'manager', 1),
('Bob Brown', 'bob@example.com', 'hashed_password', '9879879876', 'delivery_person', 1);

-- Gas Connections Table
CREATE TABLE gas_connections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    connection_type VARCHAR(50),
    agency_id INT,
    connection_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (agency_id) REFERENCES agencies(id)
);

-- Insert initial data
-- Insert gas connections
INSERT INTO gas_connections (user_id, connection_type, agency_id, connection_date)
VALUES 
(1, 'residential', 1, '2024-06-09 12:00:00'),
(1, 'commercial', 1, '2024-06-10 12:00:00');

-- Bookings Table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gas_connection_id INT,
    agency_id INT,
    booking_date DATETIME,
    status VARCHAR(50),
    payment_status VARCHAR(50),
    FOREIGN KEY (gas_connection_id) REFERENCES gas_connections(id),
    FOREIGN KEY (agency_id) REFERENCES agencies(id)
);

-- Insert initial data
-- Insert bookings
INSERT INTO bookings (gas_connection_id, agency_id, booking_date, status, payment_status)
VALUES 
(1, 1, '2024-06-09 12:00:00', 'pending', 'pending'),
(2, 1, '2024-06-10 12:00:00', 'confirmed', 'completed');

-- Inventory Table
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    agency_id INT,
    cylinder_type VARCHAR(255),
    quantity_available INT,
    last_updated DATETIME,
    FOREIGN KEY (agency_id) REFERENCES agencies(id)
);

-- Insert initial data
-- Insert inventory
INSERT INTO inventory (agency_id, cylinder_type, quantity_available, last_updated)
VALUES 
(1, 'Type A', 100, '2024-06-09 12:00:00'),
(1, 'Type B', 50, '2024-06-09 12:00:00');

-- Payments Table
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    payment_date DATETIME,
    amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

-- Insert initial data
-- Insert payments
INSERT INTO payments (booking_id, payment_date, amount, payment_method, payment_status)
VALUES 
(1, '2024-06-09 12:00:00', 50.00, 'credit_card', 'completed'),
(2, '2024-06
