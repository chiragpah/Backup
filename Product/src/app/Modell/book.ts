export interface Book {
    _id: string;
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date;
    publisher: string;
    bookPrice: number;

    bookimageUrl: File; // Change to File type

}
