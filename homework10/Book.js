class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() { return this._title; }
    set title(value) {
        if (!value) throw new Error("book title  cannot be empty");
        this._title = value;
    }

    get author() { return this._author; }
    set author(value) {
        if (!value) throw new Error("Author name cannot be empty");
        this._author = value;
    }

    get year() { return this._year; }
    set year(value) {
        if (!Number.isInteger(value) || value < 0) throw new Error("year should be a positive integer");
        this._year = value;
    }

    printInfo() {
        console.log(`${this.title} - ${this.author}, ${this.year}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
    }
}



module.exports = Book;