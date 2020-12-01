CREATE DATABASE debhub;

--set uuid extension

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_github VARCHAR(255) 
);

--insert fake data

INSERT INTO users(user_name,user_email,user_github,user_password)VALUES('Gaurav','gaurav55558@gmail.com','gauravl404','gj5247');