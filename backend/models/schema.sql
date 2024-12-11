create database blogs;
use blogs;

create table posts (
    id int auto_increment,
    title text,
    body text,
    reactions int,
    views int,
    userId int,
    primary key(id)
);

insert into posts(title, body, reactions, views, userId) values
("THis is title one", "this is body one", 19, 78, 188),
("THis is title two", "this is body two", 19, 78, 188),
("THis is title three", "this is body three", 19, 78, 188),
("THis is title four", "this is body four", 19, 78, 188),
("THis is title five", "this is body five", 19, 78, 188);



