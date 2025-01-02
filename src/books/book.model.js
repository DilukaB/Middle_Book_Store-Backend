const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Corrected
    },
    description: {
        type: String,
        required: true, // Corrected
    },
    category: {
        type: String,
        required: true, // Corrected
    },
    trending: {
        type: Boolean,
        required: true, // Corrected
    },
    coverImage: {
        type: String,
        required: true, // Corrected
    },
    oldPrice: {

        type: Number,
        required: true


    },
    newPrice: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date, // Corrected type
        default: Date.now, // Corrected default
    },
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
