const multer = require("multer");
const path = require('path');

const uploadDir = path.join(__dirname, "../", "upload");


const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cd) => {
    cd(null, file.originalname)
  },
  limits: {
    fileSize: 1048576
  }
});

const upload = multer({
    storage: storage
});

module.exports = upload;



