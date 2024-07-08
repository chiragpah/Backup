var Book = /** @class */ (function () {
    function Book(bookName, authorName, price) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.price = price;
    }
    Book.prototype.show = function () {
        console.log("Book Name:" + this.bookName);
        console.log("Author Name:" + this.authorName);
        console.log("Price:" + this.price);
    };
    return Book;
}());
var bookObj1 = new Book("Concept of C++", "Balaguruswamy", 500);
bookObj1.show();
