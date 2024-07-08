const express = require('express');
const BookController = require("../controller/Book.controller")
const multer = require("multer")
const router = express.Router();
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage, fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/jpeg')) {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG files and mp4 are allowed!'), false);
        }
    }
})


router.post('/AddBook', upload.single('bookimageUrl'), BookController.createBook);

// Route to get all products
router.get('/getBook', BookController.getAllBook);

// Route to get a single product by ID
router.get('/getBook/:id', BookController.getSingleBook);

// Route to update a product by ID
router.put('/updateBook/:id', upload.single('bookimageUrl'), BookController.updateBook);

// Route to delete a product by ID
router.delete('/deleteBook/:id', BookController.deleteBook);

module.exports = router;
