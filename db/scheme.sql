### Schema

CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT primary key,
    burger_name VARCHAR(100),
    devoured BOOLEAN NOT NULL DEFAULT FALSE
)