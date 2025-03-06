const Book = require("./Book");

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() { return this._format; }
    set format(value) {
        if (!value) throw new Error("File fomat cannot be empty");
        this._format = value;
    }

    printInfo() {
        console.log(`${this.title} - ${this.author}, ${this.year}, format: ${this.format}`);
    }

    static createFromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

module.exports = EBook;