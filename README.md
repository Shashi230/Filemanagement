# File Management API

Submission for File Management API

## Endpoints

- **GET /files**: List all files.
- **POST /files/upload**: Upload a file.
- **DELETE /files/:id**: Delete a file by ID.
- **GET /search?fileName=file_name**: Search for files by name.

## Directory Structure

file-management-api/
│
├── controller/
│ └── fileController.js
│
├── middleware/
│ └── authentication.js
│ └── errorHandler.js
│
├── router/
│ └── fileRoutes.js
│
├── service/
│ └── fileService.js
│
├── storage/
│ └── uploaded_files/
│
├── .env
├── .gitignore
├── app.js
└── README.md
└── images


## Dependencies

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Multer**: Middleware for handling multipart/form-data, used for file uploads.

## Generating JWT Token

To generate a JWT token, follow these steps:

1. Go to [jwt.io](https://jwt.io/).
2. Enter your secret key in the "Verify Signature" section. For example, use "myKey" as the secret key.
3. Enter the payload data you want to encode as a JSON object in the "Payload" section. For example:

```json
{
  "userId": "123456789",
  "username": "example_user"
}
