const express = require('express');
const multer = require('multer');
const router = express.Router();
const fileController = require('../controller/fileController');
const authenticate = require('../middleware/authentication');

// Set up Multer for file uploads with a maximum file size limit
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/uploaded_files'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname); // Set the file name
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 300 * 1024 * 1024 } });

// Routes
router.get('/files', authenticate, fileController.listFiles);// Fetching files
router.post('/files/upload', authenticate, upload.single('file'), fileController.uploadFile); // Use upload.single() middleware to handle single file uploads
router.delete('/files/:id', authenticate, fileController.deleteFile);// Deleting files
router.get('/search', authenticate, fileController.searchFiles); // Add search route

module.exports = router;
