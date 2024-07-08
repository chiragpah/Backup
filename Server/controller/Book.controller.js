const BookModel = require("../models/Book.model")
const path = require("path")
const createBook = (async (req, res, next) => {
    try {
        console.log(req.body);
        const { title, author, isbn, publicationDate, publisher, bookPrice } = req.body;

        // Create a new product instance
        bookimageUrl = req.file.filename;

        console.log(bookimageUrl);
        const newBook = new BookModel({
            title, author, isbn, publicationDate, publisher, bookPrice, bookimageUrl
        });
        await newBook.save();

        res.status(201).json(newBook);
    } catch (err) {
        console.error('Error creating Book:', err);
        res.status(500).send(err);
    }
})
const getAllBook = async (req, res, next) => {
    try {
        // Fetch all products from the database
        const Book = await BookModel.find();

        // Check if there are no products
        if (!Book || Book.length === 0) {
            return res.status(404).json({ message: 'No Book found' });
        }

        // If products are found, send them in the response
        res.json(Book);
    } catch (err) {
        console.error('Error fetching Book:', err);
        res.status(500).json({ error: 'Server Error' });
    }
};
const getSingleBook = async (req, res, next) => {
    try {
        const BookId = req.params.id;
        console.log(BookId);
        // Fetch the product by its ID from the database
        const Book = await BookModel.findById(BookId);

        // Check if the product exists
        if (!Book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // If the product is found, send it in the response
        res.json(Book);
    } catch (err) {
        console.error('Error fetching Book:', err);
        res.status(500).json({ error: 'Server Error' });
    }
};
const updateBook = async (req, res, next) => {
    try {
        console.log(req.file);
        const BookId = req.params.id;
        const { title, author, isbn, publicationDate, publisher, bookPrice, bookimageUrl } = req.body;
        if (req.file)
            bookimageUrl = req.file.filename;



        const updatedBook = await BookModel.findByIdAndUpdate(
            BookId,
            { title, author, isbn, publicationDate, publisher, bookPrice, bookimageUrl },
            { new: true } // Set { new: true } to return the updated document
        );

        // Check if the product exists
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // If the product is updated successfully, send it in the response
        res.json(updatedBook);
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ error: 'Server Error' });
    }
};
const deleteBook = async (req, res, next) => {
    try {
        const BookId = req.params.id;

        // Find the product by its ID and delete it
        const deletedBook = await BookModel.findByIdAndDelete(BookId);

        // Check if the product exists
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // If the product is deleted successfully, send a success message in the response
        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Server Error' });
    }
};


module.exports = { createBook, getAllBook, getSingleBook, updateBook, deleteBook }