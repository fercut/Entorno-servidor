import fs from 'fs';
import path from 'path';

export const uploadFile = (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send('No file has been selected.');
    }

    return res.status(200).send('File uploaded successfully.');
  } catch (error) {
    return res.status(500).send('Error uploading the file.');
  }
};

const uploadDir = path.resolve('./files');

export const downloadFile = (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(uploadDir, filename);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('File not found.');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error downloading the file.');
  }
};