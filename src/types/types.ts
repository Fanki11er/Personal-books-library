export type Book = {
  author: string;
  title: string;
  read: boolean;
  genre: string;
  addedDate: string;
  id: string;
};

export type BooksData = {
  books: [Book];
};

export type BookData = {
  book: Book;
};
