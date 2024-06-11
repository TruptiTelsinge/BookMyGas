/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'gas_booking_system';

// Create a new database.
use(database);

// Users Collection
db.createCollection("users");
const userIds = db.users.insertMany([
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@gmail.com",
    "password": "hashed_password",
    "address": "123 Main St",
    "phone": "1234567890",
    "role": "user",
    "order_history": []
  },
  {
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice@gmail.com",
    "password": "hashed_password",
    "address": "456 Elm St",
    "phone": "1231231234",
    "role": "admin",
    "order_history": []
  }
]).insertedIds;

// Agencies Collection
db.createCollection("agencies");
const agencyIds = db.agencies.insertMany([
  {
    "name": "Bharat Gas Agency",
    "address": "789 Maple St",
    "phone": "1112223333",
    "email": "agency1@example.com",
    "manager_id": null
  },
  {
    "name": "Agency Two",
    "address": "101 Pine St",
    "phone": "4445556666",
    "email": "agency2@example.com",
    "manager_id": null
  }
]).insertedIds;

// Staff Collection
db.createCollection("staff");
const staffIds = db.staff.insertMany([
  {
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice@example.com",
    "password": "hashed_password",
    "phone": "1231231234",
    "role": "manager",
    "agency_id": agencyIds[0]
  },
  {
    "first_name": "Bob",
    "last_name": "Brown",
    "email": "bob@example.com",
    "password": "hashed_password",
    "phone": "9879879876",
    "role": "delivery_person",
    "agency_id": agencyIds[0]
  }
]).insertedIds;

// Update agencies with manager_id
db.agencies.updateOne(
  { _id: agencyIds[0] },
  { $set: { manager_id: staffIds[0] } }
);

// Gas Connections Collection
db.createCollection("gas_connections");
const gasConnectionIds = db.gas_connections.insertMany([
  {
    "user_id": userIds[0],
    "connection_type": "residential",
    "agency_id": agencyIds[0],
    "connection_date": new Date("2024-06-09T12:00:00Z")
  },
  {
    "user_id": userIds[0],
    "connection_type": "commercial",
    "agency_id": agencyIds[0],
    "connection_date": new Date("2024-06-10T12:00:00Z")
  }
]).insertedIds;

// Bookings Collection
db.createCollection("bookings");
const bookingIds = db.bookings.insertMany([
  {
    "gas_connection_id": gasConnectionIds[0],
    "agency_id": agencyIds[0],
    "booking_date": new Date("2024-06-09T12:00:00Z"),
    "status": "pending",
    "payment_status": "pending"
  },
  {
    "gas_connection_id": gasConnectionIds[1],
    "agency_id": agencyIds[0],
    "booking_date": new Date("2024-06-10T12:00:00Z"),
    "status": "confirmed",
    "payment_status": "completed"
  }
]).insertedIds;

// Inventory Collection
db.createCollection("inventory");
const inventoryIds = db.inventory.insertMany([
  {
    "agency_id": agencyIds[0],
    "cylinder_type": "Type A",
    "quantity_available": 100,
    "last_updated": new Date("2024-06-09T12:00:00Z")
  },
  {
    "agency_id": agencyIds[0],
    "cylinder_type": "Type B",
    "quantity_available": 50,
    "last_updated": new Date("2024-06-09T12:00:00Z")
  }
]).insertedIds;

// Payments Collection
db.createCollection("payments");
const paymentIds = db.payments.insertMany([
  {
    "booking_id": bookingIds[0],
    "payment_date": new Date("2024-06-09T12:00:00Z"),
    "amount": 50.00,
    "payment_method": "credit_card",
    "payment_status": "completed"
  },
  {
    "booking_id": bookingIds[1],
    "payment_date": new Date("2024-06-10T12:00:00Z"),
    "amount": 70.00,
    "payment_method": "debit_card",
    "payment_status": "completed"
  }
]).insertedIds;

// Feedback Collection
db.createCollection("feedback");
const feedbackIds = db.feedback.insertMany([
  {
    "user_id": userIds[0],
    "agency_id": agencyIds[0],
    "feedback_text": "Great service!",
    "rating": 5,
    "feedback_date": new Date("2024-06-09T12:00:00Z")
  },
  {
    "user_id": userIds[0],
    "agency_id": agencyIds[0],
    "feedback_text": "Delivery was late.",
    "rating": 3,
    "feedback_date": new Date("2024-06-10T12:00:00Z")
  }
]).insertedIds;

