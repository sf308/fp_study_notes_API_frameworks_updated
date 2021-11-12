const booksData = require('../data');

class Book {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
		this.source = data.source;
    }

    static get all() {
        const books = booksData.map((book) => new Book(book));
        return books;
    }

    static findById(id) {
        try {
            const bookData = booksData.filter((book) => book.id === id)[0];
            const book = new Book(bookData);
            return book;
        } catch (err) {
            throw new Error('That book does not exist!');
        }
    }

    static create(book) {
        const newBookId = booksData.length + 1;
        const newBook = new Book({ id: newBookId, ...book });
        booksData.push(newBook);
        return newBook;
    }

    destroy() {
        const book = booksData.filter((book) => book.id === this.id)[0];
        booksData.splice(booksData.indexOf(book), 1);
    }
}

module.exports = Book;
