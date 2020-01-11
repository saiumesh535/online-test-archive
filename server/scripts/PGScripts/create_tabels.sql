CREATE TABLE users(
      id serial PRIMARY KEY,
      username VARCHAR (50) UNIQUE NOT NULL,
      password VARCHAR (50) NOT NULL,
      email VARCHAR (355) UNIQUE NOT NULL,
      created_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tests(
    id serial PRIMARY KEY,
    name VARCHAR (250) UNIQUE NOT NULL,
	timer INTEGER NOT NULL,
	cutoff INTEGER NOT NULL,
    created_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE questions(
    id serial PRIMARY KEY,
	test_id INTEGER,
    question VARCHAR(10485760) NOT NULL,
	created_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE options(
    id serial PRIMARY KEY,
	question_id INTEGER,
    option VARCHAR(1024) NOT NULL,
	created_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE answers(
    id serial PRIMARY KEY,
	question_id INTEGER,
	option_id INTEGER,
	created_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE colleges(
    id serial PRIMARY KEY,
	name VARCHAR(250) UNIQUE NOT NULL,
	test_id INTEGER,
	uuid VARCHAR (250) UNIQUE NOT NULL,
	created_on TIMESTAMP DEFAULT NOW()
);

CREATE TABLE attendees(
    id serial PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	email VARCHAR(250) UNIQUE NOT NULL,
	pin VARCHAR(250) UNIQUE NOT NULL,
	college_id INTEGER,
	created_on TIMESTAMP DEFAULT NOW()
);