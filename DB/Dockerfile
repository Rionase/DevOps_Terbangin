# Use the official MariaDB image as the base
FROM mariadb:latest

# Set environment variables for MariaDB
ENV MYSQL_ROOT_PASSWORD=sukses
ENV MYSQL_DATABASE=terbangin 

# Copy the database dump into the MariaDB initialization directory
COPY terbangin_source.sql /docker-entrypoint-initdb.d/

# Expose the default MariaDB port
EXPOSE 3306
