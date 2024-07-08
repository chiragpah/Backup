class Book {
    bookName: string;
    authorName: string;
    price: number;
    constructor(bookName: string, authorName: string, price: number) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.price = price;

    }
    show() {
        console.log("Book Name:" + this.bookName);
        console.log("Author Name:" + this.authorName);
        console.log("Price:" + this.price);

    }
}
let bookObj1 = new Book("Concept of C++", "Balaguruswamy", 500)
bookObj1.show()