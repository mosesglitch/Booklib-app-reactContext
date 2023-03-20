import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList() {
  const { mbooks, tester } = useContext(BooksContext);
  console.log(mbooks, tester);

  const renderedBooks = mbooks.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
