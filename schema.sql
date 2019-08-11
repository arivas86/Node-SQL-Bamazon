DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price decimal(10,2) not null,
stock_qty int(5) not null,
primary key (item_id)
);


SELECT * FROM bamazon.products;

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES("PS4", "Video Games", 300.00, 20),
	("FIFA 20", "Video Games", 60.00, 100),
    ("Vacuum", "Home Goods", 75.60, 200),
    ("The Lion King", "Movies", 29.75, 10),
    ("Sorround Sound System", "Electronics", 2999.75, 35),
    ("Protein", "Sports Nutrition", 59.75, 200),
    ("Printer", "Office Products", 269.99, 30),
    ("50 inch TV", "Electronics", 799.95, 5),
    ("Rechargable Baterries", "Electronics", 9.75, 1000),
    ("Rayban Shades", "Apparel", 285.60, 300);
    
SELECT * FROM bamazon.products;