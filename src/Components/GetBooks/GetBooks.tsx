import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h3>Couldn't find any books</h3>;
  }

  return (
    <>
      {books &&
        books?.map((book: Book) => (
          <tr key={book.id} className={styles.GetBooks__body}>
            <NavLink to={`/BookCard/${book.id}`}>
              <td>{book.volumeInfo.title ? book.volumeInfo.title : "UnKnown Title"}</td>
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
            <td>
              {book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate
                : "No Date"}
            </td>
          </tr>
        ))}
    </>
  );
};

export default GetBooks;
