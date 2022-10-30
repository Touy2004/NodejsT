export const CREATE_TABLE = `create table users(
    id int auto_increment primary key,
    firstName varchar(20),
    lastName varchar(20),
    phone varchar(12),
    password varchar(100)
)`

export const REGISTER = `insert into users (firstName, lastName, phone, password) value ?`
export const LOGIN = `select * from users where phone = ?`
export const SELECT_PHONE = `select * from users where phone = ?`