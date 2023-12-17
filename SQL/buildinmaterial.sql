create table products(
proid int primary key identity(1,1),
productname varchar(45),
sellprice real not null,
costprice real not null,
brand varchar(45)
);

create table stocks(
stockid int primary key identity(1,1),
quantity int not null,
proid int,
foreign key (proid) REFERENCES products(proid) ON DELETE CASCADE ON UPDATE CASCADE
);

create table users(
username varchar(45) primary key,
useremail varchar(45) unique,
userpass varchar(45),
userrole varchar(45) not null default 'basic'
);

create table suppliers(
supid int primary key identity(1,1),
supcode varchar(45) unique not null,
supname varchar(45),
supmobile varchar(11)
);

create table customers(
cusid int primary key identity(1,1),
customername varchar(45),
customerphone varchar(11)
);

create table sales(
saleid int primary key identity(1,1),
salequantity int,
cusid int,
saleprice real,
proid int,
foreign key (proid) REFERENCES products(proid) ON DELETE CASCADE ON UPDATE CASCADE,
foreign key (cusid) REFERENCES customers(cusid) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Insert data into the 'products' table
INSERT INTO products (productname, sellprice, costprice, brand)
VALUES 
('Cement', 10.00, 8.00, 'ABC Brand'),
('Bricks', 5.00, 3.00, 'XYZ Brand');

-- Insert data into the 'stocks' table
INSERT INTO stocks (quantity, proid)
VALUES 
(100, 1),
(500, 2);

-- Insert data into the 'users' table
INSERT INTO users (username, useremail, userpass, userrole)
VALUES 
('yakub001', 'yakub@example.com', '12345', 'admin'),
('abid001', 'abid@example.com', '123456', 'basic');

-- Insert data into the 'suppliers' table
INSERT INTO suppliers (supcode, supname, supmobile)
VALUES 
('S01', 'Supplier1', '11122233344'),
('S02', 'Supplier2', '55566677788');

-- Insert data into the 'customers' table
INSERT INTO customers (customername, customerphone)
VALUES 
('Customer1', '99988877766'),
('Customer2', '44433322211');

-- Insert data into the 'sales' table
INSERT INTO sales (salequantity, cusid, saleprice, proid)
VALUES 
(50, 1, 50.33, 1),
(230, 2, 120.33, 2);