export const CREATE_TABLE = `create table products(
    id int auto_increment primary key,
    name varchar(25),
    price varchar(10),
    details varchar(255),
    image varchar(100)
)`

export const ADD = `insert into products (name, price, details, image) value ?`
export const UPDATE = "UPDATE products SET `name` =? `price` =? `details` =? `image` =? WHERE `id` =? "
export const DELETE = "DELETE FROM products WHERE `id` =? "