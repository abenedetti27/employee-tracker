DROP DATABASE IF EXISTS people_db;
CREATE DATABASE people_db;

USE people_db;

CREATE TABLE department (
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(50) NOT NULL
);