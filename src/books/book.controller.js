const Book = require("./book.model");

const postABook = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Debugging request payload

        // Save the book to the database
        const book = new Book(req.body);
        const savedBook = await book.save();

        // Respond with the saved book
        res.status(201).json({
            message: "Book created successfully",
            data: savedBook,
        });
    } catch (error) {
        console.error("Error creating book:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//get all books

const getAllBooks = async (req, res) => {

    try {

        const books = await Book.find().sort({ createAt: -1 });
        res.status(201).send(books)


    } catch (error) {

        console.error("Error fetching book:", error.message);
        res.status(500).json({ error: "Failed to fetch book" })

    }
}

const getSingleBook = async (req, res) => {

    try {

        const { id } = req.params;
        const book = await Book.findById(id)
        if (!book) {
            res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send(book)


    } catch (error) {

        console.error("Error fetching book:", error.message);
        res.status(500).json({ error: "Failed to fetch book" })

    }
}
//update vbook data

const UpdateBook = async (req, res) => {
    try {

        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            res.status(500).send({ message: "Book is not found" })
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })

    } catch (error) {
        console.error("Error updating a book:", error.message);
        res.status(500).json({ error: "Failed to update a book" })
    }
}
const deleteABook = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) {
            res.status(404).send({ message: "Book is not found!" })
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        console.error("Error deleting a book:", error.message);
        res.status(500).json({ error: "Failed to delete a book" })
    }
};

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook
}