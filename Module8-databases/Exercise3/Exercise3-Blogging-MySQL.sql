CREATE DATABASE blogging_db;

USE blogging_db;

SHOW DATABASES;

CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(50) NOT NULL,
lastName VARCHAR(50) NOT NULL,
emailId VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

SHOW TABLES;

CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  image VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

SHOW TABLES;

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  postId INT NOT NULL,
  comment VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (postId) REFERENCES posts(id)
);

SHOW TABLES;

CREATE TABLE likes (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  postId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (postId) REFERENCES posts(id)
);

SHOW TABLES;

INSERT INTO users (firstName, lastName, emailId, password)
VALUES
('John', 'Doe', 'john@example.com', '123456'),
('Jane', 'Smith', 'jane@example.com', '123456');

SELECT * FROM users;

INSERT INTO posts (userId, title, description, image)
VALUES
(1, 'My First Post', 'This is my first blog post.', 'image1.jpg'),
(2, 'Another Post', 'This is another blog post.', 'image2.jpg');

SELECT * FROM posts;

INSERT INTO comments (userId, postId, comment)
VALUES
(2, 1, 'Great post!'),
(1, 2, 'Thanks for sharing');

SELECT * FROM comments;

INSERT INTO likes (userId, postId)
VALUES
(2, 1),
(1, 2);

SELECT * FROM likes;