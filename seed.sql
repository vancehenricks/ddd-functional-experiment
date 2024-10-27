CREATE DATABASE miniblogsitedb;

\c miniblogsitedb

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    display_name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(200) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE posts (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    message VARCHAR(500) NOT NULL,
    PRIMARY KEY(post_id),
    CONSTRAINT fk_users
      FOREIGN KEY(user_id)
  	  REFERENCES users(user_id)
  	  ON DELETE CASCADE
);

CREATE TABLE likes (
  like_id INT GENERATED ALWAYS AS IDENTITY,
  post_id INT,
  user_id INT,
  PRIMARY KEY (like_id),
  CONSTRAINT fk_post
    FOREIGN KEY(post_id)
    REFERENCES posts(post_id)
    ON DELETE CASCADE,
  CONSTRAINT fk_users
    FOREIGN KEY(user_id)
	REFERENCES users(user_id)
	ON DELETE CASCADE
);


-- Insert dummy data into the users table
INSERT INTO users (username, password, display_name, description, email) VALUES
('johndoe', 'password123', 'John Doe', 'Software developer', 'johndoe@example.com'),
('janedoe', 'password456', 'Jane Doe', 'Graphic designer', 'janedoe@example.com'),
('alice', 'password789', 'Alice Smith', 'Content writer', 'alice@example.com'),
('bob', 'password000', 'Bob Brown', 'Marketing specialist', 'bob@example.com'),
('charlie', 'password111', 'Charlie Black', 'Project manager', 'charlie@example.com');

-- Insert dummy data into the posts table
INSERT INTO posts (user_id, message) VALUES
(1, 'This is my first post!'),
(1, 'Loving the weather today!'),
(2, 'Just finished a new design project.'),
(3, 'Excited to start my new job!'),
(4, 'Looking for marketing tips!'),
(5, 'Just published a new article!');

-- Insert dummy data into the likes table
INSERT INTO likes (post_id, user_id) VALUES
(1, 2),  -- Jane likes John's first post
(1, 3),  -- Alice likes John's first post
(2, 1),  -- John likes his own post about the weather
(3, 2),  -- Jane likes her own post about her design project
(4, 3),  -- Alice likes Bob's post looking for marketing tips
(5, 1),  -- John likes Charlie's article
(5, 2),  -- Jane likes Charlie's article
(6, 4);  -- Bob likes Alice's new job post
