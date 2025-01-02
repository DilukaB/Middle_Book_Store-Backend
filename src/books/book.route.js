const express = require('express');
const router = express.Router();
const Book = require('./book.model'); // Import the Book model
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

// POST: Create a book
router.post("/create-book", verifyAdminToken, postABook
);

//get all books

router.get("/", getAllBooks)

//single book endpoint
router.get("/:id", getSingleBook);

//update a book endpoint

router.put("/edit/:id", verifyAdminToken, UpdateBook)

router.delete("/:id", verifyAdminToken, deleteABook)



module.exports = router;
