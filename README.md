# health_service
Healthcare Services API Documentation

Overview
--------
The Healthcare Services API allows users to manage healthcare services, including adding, retrieving, updating, and deleting services. This API is built using Node.js, Express, and MongoDB.

Features
--------
- Add a new healthcare service
- Retrieve all healthcare services
- Update an existing healthcare service
- Delete a healthcare service

Technologies Used
-----------------
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv (for environment variables)

Setup Instructions
-------------------
Prerequisites
--------------
- Node.js (v14 or later)
- MongoDB (local or MongoDB Atlas)
- Postman or any API testing tool

Installation
------------
1. Clone the Repository
   git clone https://github.com/yourusername/healthcare-services-api.git
   cd healthcare-services-api

2. Install Dependencies
   npm install

3. Create a `.env` File
   In the root directory of your project, create a file named `.env` and add your MongoDB connection string:
   MONGODB_URI=mongodb+srv://username:password@your-cluster.mongodb.net/?retryWrites=true&w=majority&appName=YourApp

4. Start the Server
   node index.js
   The server will start at http://localhost:8080.

API Endpoints
--------------
1. Add a New Service
   - URL: /api/services
   - Method: POST
   - Request Body:
     {
         "name": "Service Name",
         "description": "Service Description",
         "price": 100
     }
   - Response:
     - 201 Created:
       {
           "_id": "service_id",
           "name": "Service Name",
           "description": "Service Description",
           "price": 100
       }
     - 400 Bad Request:
       Name, description, and price are required.

2. Get All Services
   - URL: /api/services
   - Method: GET
   - Response:
     - 200 OK:
       [
           {
               "_id": "service_id",
               "name": "Service Name",
               "description": "Service Description",
               "price": 100
           },
           ...
       ]

3. Update a Service
   - URL: /api/services/:id
   - Method: PUT
   - Request Body:
     {
         "name": "Updated Service Name",
         "description": "Updated Service Description",
         "price": 120
     }
   - Response:
     - 200 OK:
       {
           "_id": "service_id",
           "name": "Updated Service Name",
           "description": "Updated Service Description",
           "price": 120
       }
     - 404 Not Found:
       Service not found.
     - 400 Bad Request:
       Name, description, and price are required.

4. Delete a Service
   - URL: /api/services/:id
   - Method: DELETE
   - Response:
     - 204 No Content: (Service successfully deleted)
     - 404 Not Found:
       Service not found.

Notes
-----
- Ensure your MongoDB server is running and accessible.
- Modify the `.env` file with your actual MongoDB connection string.
- This API can be tested using tools like Postman or CURL.
