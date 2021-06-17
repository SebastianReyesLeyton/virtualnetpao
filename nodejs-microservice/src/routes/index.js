const express = require('express');
const router = express.Router();
const upload = require('../services/uploadFile');

router.get('/', (req, res) => {
    res.render('index.html')
})

router.post('/subir', upload.single('file'), (req, res)=> {
    console.log(`Storage location is ${req.hostname}/${req.file.path}`);
    return res.send(req.file)
})

module.exports = router;