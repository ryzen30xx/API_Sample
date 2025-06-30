const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    published: { type: Date, required: true },
    isbn: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
