# Project Name
This is a project that consists of a website UI built with Angular and a web API built with .NET. The projects are deployed using a Docker Compose file, which creates three containers: one for the UI, one for the web API, and one for the MySQL server.

## Getting Started
To get started with this project, you will need to have Docker installed on your machine. You can download Docker from the official website: https://www.docker.com/get-started.

Once you have Docker installed, you can clone this repository to your local machine using the following command:

Copy code
```
git clone https://github.com/your-username/ecomDocker.git
```
After cloning the repository, navigate to the project directory and run the following command to start the application:

Copy code
```
docker-compose up
```
This will create the three containers (UI, web API, and MySQL server) and start the application. You can access the UI at http://localhost:5010 and the web API at http://localhost:5000.

## Database Scripts

There are two database scripts that need to be executed in order to set up the database. The first script, DB_Script_Schema_Only.sql, creates the database schema. The second script, DB_Script_Data_Only.sql, populates the database with data.

To execute these scripts, connect to the SQL server container using a SQL client such as Azure Data Studio, and run the scripts in the following order:

1. DB_Script_Schema_Only.sql
2. DB_Script_Data_Only.sql

## Technologies Used

- Angular
- .NET
- Docker
- MySQL