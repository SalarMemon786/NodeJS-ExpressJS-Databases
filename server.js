require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path'); // Import path module
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;

// Make sure 'uploads/' directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); // Extract extension (.png, .jpg, .pdf)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext); // Add extension in filename
    }
});

const upload = multer({ storage: storage });

app.post("/api/fileupload", upload.single('file'), (req, res) => {
    console.log("File:", req.file); // Debugging

    if (!req.file) {
        return res.status(400).json({ error: "File upload failed" });
    }

    res.status(200).json({
        msg: "File uploaded successfully",
        file: req.file
    });
});

app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));