-- Create the table in the default database (if you want to use a specific database, use \connect)
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    position VARCHAR(80) NOT NULL
);
