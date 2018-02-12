const express = require('express');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/' // this saves your file into a directory called 'uploads
});

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// It's very crucial that the file name mataches the name attributes in your html
app.post('/', upload.single('file-to-upload'), (req, res) => {
    res.json({"size": req.file.size});
});

app.listen(3000);


