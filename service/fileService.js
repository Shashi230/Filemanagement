const fs = require('fs');
const path = require('path');

const FILE_STORAGE_PATH = path.join(__dirname, '..', 'storage', 'uploaded_files');

exports.listFiles = async () => {
  return new Promise((resolve, reject) => {
    fs.readdir(FILE_STORAGE_PATH, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

exports.uploadFile = async (file, category) => {
    console.log(FILE_STORAGE_PATH);
    if (!file) {
        throw new Error('No file uploaded');
    }
    const filePath = path.join(FILE_STORAGE_PATH, file.originalname);
    console.log(filePath);
    await fs.promises.rename(file.path, filePath);
};

exports.deleteFile = async (fileName) => {
  const filePath = path.join(FILE_STORAGE_PATH, fileName);
  await fs.promises.unlink(filePath);
  // Delete file details from database or perform other operations
};
