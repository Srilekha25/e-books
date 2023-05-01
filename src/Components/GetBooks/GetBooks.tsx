import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBooks } from "../../services/post-services";
import styles from "../GetBooks/GetBooks.module.scss";
import { NavLink } from "react-router-dom";
import { Book } from "../../Interfaces/BookInterface";

const GetBooks = () => {
  const {
    data: books,
    isError,
    isLoading,
  } = useQuery<Book[] | null>(["books"], getAllBooks);
  console.log("books in GetBooks", books);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error while fetching Data</div>;
  }

  return (
    <div>
      {books &&
        books?.map((book: Book, index: number) => (
          <tr key={index}>
            <NavLink to={`/Book/${book.id}`}>
            <td>{book.volumeInfo.title}</td>
            </NavLink>
            <td>
              {book.volumeInfo.authors
                ? book.volumeInfo.authors?.join(", ")
                : "UnKnown Author"}
            </td>
            <td>
              {book.volumeInfo.publisher
                ? book.volumeInfo.publisher
                : "No Publisher"}
            </td>
          </tr>
        ))}
    </div>
  );
};

export default GetBooks;
