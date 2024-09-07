# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Environment variables for PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=postgres

# Copy the initialization script to the Docker image
COPY init.sql /docker-entrypoint-initdb.d/

# The PostgreSQL entrypoint script will automatically run
# any .sql files in the /docker-entrypoint-initdb.d directory
