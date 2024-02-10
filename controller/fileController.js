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
      const category = req.body.category; // Retrieve the category from the request body
      if (!category) {
        return res.status(400).json({ message: 'Category is required' });
      }
      await fileService.uploadFile(file, category); // Pass the category to the uploadFile function in fileService
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  };
  

exports.deleteFile = async (req, res, next) => {
  try {
    const fileId = req.params.id;
    await fileService.deleteFile(fileId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
