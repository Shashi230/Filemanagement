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


## Results
  Get list of all files
   ![get all files list](./images/Get_lists_of_file.png)

  ### Delete
  ### When file doesn't exist
   ![Delete if file not exist](./images/delete%20if%20file%20not%20found.png)
      
  ### When file exist
   ![Delete existing file](./images/Deleted%20File.png)
   
  ### Upload File
   ![upload file](./images/uploadfile.png)
     
  ### Search File 
  ![upload file](./images/Search%20File.png)

## Dependencies

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Multer**: Middleware for handling multipart/form-data, used for file uploads.

## Generating JWT Token

To generate a JWT token, follow these steps:

1. Go to [jwt.io](https://jwt.io/).
2. Enter your secret key in the "Verify Signature" section. For example, use "myKey" as the secret key.

# Using JWT Token for Authentication

Once you've entered the payload data and secret key, the website will generate a JWT token for you.

## How to Use JWT Token

To use the JWT token for authentication in the API:

1. Include the generated JWT token in the Authorization header of your HTTP requests.

   **Example:**
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkiLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciJ9.C0aZU9tT0TAvzVoKZzuk1ix1rD7_RzbfzCY8HtY-eBo

2. The server will verify the JWT token using the provided secret key (e.g., "myKey") and grant access to the protected routes if the token is valid.

## Secret Key

For this project, I am using the secret key "myKey".
