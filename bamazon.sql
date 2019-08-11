CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(20) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price decimal(5,2) not null,
stock_qty int(5) not null,
);
