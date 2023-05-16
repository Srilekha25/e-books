import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../Interfaces/BookInterface";
import styles from "../BookCard/BookCard.module.scss";
import BackButton from "../BackButton/BackButton";

const BookCard = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const books = queryClient.getQueryData<Book[]>(["books"]);

  const book = books?.filter((b) => b.id === id);

  return (
    <div className={styles.BookCard__wrapper}>
        <BackButton />
      <div className={styles.BookCard_body}>
        {books &&
          book?.map((b: Book, index: number) => (
            <div key={index} className={styles.BookCard__item}>
              <img src={b.volumeInfo.imageLinks.thumbnail} />
              <h1>{b.volumeInfo.title}</h1>
              <strong>By</strong>
              <p>
                {b.volumeInfo.authors
                  ? b.volumeInfo.authors.join(", ")
                  : "UnKnown Author"}
              </p>
              <p>
                <strong>Description: </strong>
                {b.volumeInfo.description
                  ? b.volumeInfo.description
                  : "Description UnAvailable"}
              </p>
              <a href={b.volumeInfo.previewLink} target="_blank">
                Preview
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookCard;
