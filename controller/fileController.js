const fileService = require('../service/fileService');

exports.listFiles = async (req, res, next) => {
  try {
    const files = await fileService.listFiles();
    res.json(files);
  } catch (error) {
    next(error);
  }
};

exports.uploadFile = async (req, res, next) => {
    try {
      const file = req.file;
      await fileService.uploadFile(file); // Pass the category to the uploadFile function in fileService
      res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
      next(error);
    }
  };
  

exports.deleteFile = async (req, res, next) => {
  try {
    const fileId = req.params.id;
    await fileService.deleteFile(fileId);
    res.status(204).json({ message: 'File deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.searchFiles = async (req, res, next) => {
  try {
    const { fileName } = req.query;    
    // Wrap the callback-based function in a Promise
    const files = await new Promise((resolve, reject) => {
      fileService.searchFiles(fileName, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
};
