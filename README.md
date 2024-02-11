# Filemanagement
submission for file-management-api


Endpoints
GET /files: List all files.
POST /files/upload: Upload a file.
DELETE /files/:id: Delete a file by ID.
GET /search?fileName=file_name: Search for files by name.

file-management-api/
│
├── controller/
│   └── fileController.js
│
├── middleware/
│   └── authentication.js
|   └── errorHandler.js
│
├── router/
│   └── fileRoutes.js
│
├── service/
│   └── fileService.js
│
├── storage/
│   └── uploaded_files/
│
├── .env
├── .gitignore
├── app.js
└── README.md
└── images


Dependencies:
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
Multer: Middleware for handling multipart/form-data, used for file uploads.

Generating JWT Token:
To generate a JWT token, follow these steps:

1. Go to jwt.io.
2. Enter your secret key in the "Verify Signature" section. For example, use "myKey" as the secret key.
3. Enter the payload data you want to encode as a JSON object in the "Payload" section. For example:json

Once you've entered the payload data and secret key, the website will generate a JWT token for you.
Using JWT Token
To use the JWT token for authentication in the API:

Include the generated JWT token in the Authorization header of your HTTP requests.
Example:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkiLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciJ9.C0aZU9tT0TAvzVoKZzuk1ix1rD7_RzbfzCY8HtY-eBo
The server will verify the JWT token using the provided secret key (e.g., "myKey") and grant access to the protected routes if the token is valid.


**For this project I am using secret key as "myKey"**