const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("Гаррі Поттер і філософський камінь", "Дж.  Роулінг", 1997);
const book2 = new Book("Голодні ігри", "Сюзанна Коллінз", 2008);
const ebook1 = new EBook("Зоряні війни: Спадкоємець Імперії", "Т. Зан", 1991, "PDF");
const ebook2 = new EBook("Великий Гетсбі", "Френсіс Скотт Фіцджеральд", 1925, "EPUB");


book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();



const books = [book1, book2, ebook1, ebook2];
console.log("Найстаріша книга:", Book.findOldestBook(books).title);

const convertedEBook = EBook.createFromBook(book1, "EPUB");
convertedEBook.printInfo();