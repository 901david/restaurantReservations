CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE reservations (
customer_id INTEGER(10) AUTO_INCREMENT NOT NULL,
customer_name VARCHAR(30) NOT NULL,
customer_phone INTEGER(10) NOT NULL,
customer_email VARCHAR(50) NOT NULL,
PRIMARY KEY (customer_id)
);

SELECT * FROM reservations;