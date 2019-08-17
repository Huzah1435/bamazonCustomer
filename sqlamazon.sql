DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;
CREATE TABLE products_db (
item_id int NOT NULL,
product_name VARCHAR(50),
department_name VARCHAR(50),
price DECIMAl(6,2),
stock_quantity int NOT NULL,
PRIMARY KEY (item_id)
);