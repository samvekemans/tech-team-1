const multer = require('multer');
const path = require('path');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/uploads`);
  },
  filename(req, file, cb) {
    // file.originalname moet misschien weg i.v.m. gulp -> bestanden krijgen een andere extentie.
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: fileStorageEngine,
});

module.exports = {
  upload
};