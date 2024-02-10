const express = require('express');
const router = express.Router();
const fileController = require('../controller/fileController');
const authenticate = require('../middleware/authentication');
const multer = require('multer');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/uploaded_files'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  }
});

const upload = multer({ storage: storage });

// Routes
router.get('/api/files', authenticate, fileController.listFiles);
router.post('/api/files/upload', authenticate, upload.single('file'), fileController.uploadFile); // Use upload.single() middleware to handle single file uploads
router.delete('/api/files/:id', authenticate, fileController.deleteFile);

module.exports = router;
