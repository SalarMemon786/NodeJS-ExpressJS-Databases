require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

//check the upload folder is exist if not then create this...
const uploadDir = 'uploads';
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

//multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9);
        cb(null, file.fieldname +'-'+ uniqueSuffix + ext);
    }
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single('file'), (req, res) => {
    console.log(`File: `, req.file); //for debugging
    if(!req.file) {
        return res.status(400).json({ err: "file is not send." });
    }
    res.status(200).json({
        msg: "file uploaded successfully.",
        file: req.file
    })
});

app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));