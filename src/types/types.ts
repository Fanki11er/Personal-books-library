export type Book = {
  author: string;
  title: string;
  read: boolean;
};

export type BooksData = {
  books: [Book];
};

export type BookData = {
  book: Book;
};
