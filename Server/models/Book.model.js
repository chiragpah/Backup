const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,

    },
    publisher: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    bookimageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }





})


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;