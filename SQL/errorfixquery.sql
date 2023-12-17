-- delete all rows from the products table
delete from products;
-- Reset the primary key from 0
DBCC CHECKIDENT('products', RESEED, 0);

-- Delete rows 4 and 5 from the 'products' table
DELETE FROM products WHERE proid IN (4,5);

-- Will not map/create quantity column in product table
[NotMapped]
public int quantity { get; set; }

-- swager API testing INPUT for product table
{
  "proid": 0,
  "productname": "Tiles",
  "sellprice": 10,
  "costprice": 2,
  "brand": "XYZ Brand",
  "quantity": 10
}

-- Drop the existing foreign key constraint then drop the column
ALTER TABLE sales DROP CONSTRAINT FK__sales__proid__5BE2A6F2;
ALTER TABLE sales DROP COLUMN proid;

-- Add a column in sale table
ALTER TABLE sales ADD proid int;

-- Add the foreign key constraint with ON DELETE CASCADE and ON UPDATE CASCADE
ALTER TABLE sales
ADD CONSTRAINT FK__sales__cusid
FOREIGN KEY (cusid)
REFERENCES customers (cusid)
ON DELETE CASCADE
ON UPDATE CASCADE;
