# Employee Portal

## Overview

This project is a simple employee portal with a Flask backend, a React frontend, and a PostgreSQL database. It is deployed to Amazon EKS.

## Backend

The backend is built with Flask and uses SQLAlchemy to interact with a PostgreSQL database.

### Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```
3. Run the Flask application:
    ```sh
    python app.py
    ```

## Frontend

The frontend is a React application.

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the React application:
    ```sh
    npm start
    ```

## PostgreSQL Setup

1. Create the database and tables using the provided SQL commands.
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    position VARCHAR(80) NOT NULL
);

## Kubernetes Deployment

1. Apply the PostgreSQL deployment and service:
   
    ```sh
    kubectl apply -f dockerhub-secret.yaml
    kubectl apply -f k8s/postgres-deployment.yaml
    ```

2. Apply the Flask deployment and service:
    ```sh
    kubectl apply -f k8s/flask-deployment.yaml
    ```

3. Apply the React deployment and service:
    ```sh
    kubectl apply -f k8s/react-deployment.yaml
    ```

## License

This project is licensed under the MIT License.
