const express = require('express');
const router = express.Router();

const Book = require('../models/book');

router.get('/', (req, res) => {
    const booksData = Book.all;
    res.send(booksData);
});

router.get('/:id', (req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        const selectedBook = Book.findById(bookId);
        res.send(selectedBook);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newBook = Book.create(data);
    res.status(201).send(newBook);
});

router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookToDestroy = Book.findById(bookId);
    bookToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;
