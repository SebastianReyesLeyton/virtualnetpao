const multer = require('multer');
const path = require('path');

// Storage files
let storage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null, '../db/files')
    },
    filename:(req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage });

module.exports = upload;