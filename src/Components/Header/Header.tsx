import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "../Header/Header.module.scss";
import { useQueryClient } from "@tanstack/react-query";
import { Book } from "../../Interfaces/BookInterface";

const Header = () => {
  const queryClient = useQueryClient();
  const books = queryClient.getQueryData<Book[] | undefined>(["books"]);
  const [selectedValue, setSelectedValue] = useState("None");
  const [originalData, setOriginalData] = useState<Book[] | undefined>(books);

  const handleClick = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectedValue === "Author") {
      const sorted = [...(books ?? [])].sort((a: Book, b: Book) => {
        const authorA = a.volumeInfo.authors ? a.volumeInfo.authors[0] : "UnKnown Author";
        const authorB = b.volumeInfo.authors ? b.volumeInfo.authors[0] : "UnKnown Author";
        return authorA.localeCompare(authorB);
      });
      queryClient.setQueryData<Book[]>(["books"], sorted);
    } else if (selectedValue === "Title") {
      const sorted = [...(books ?? [])].sort((a: Book, b: Book) => {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      });
      queryClient.setQueryData<Book[]>(["books"], sorted);
    } else if (selectedValue === "Published Date") {
      const sorted = [...(books ?? [])].sort((a: Book, b: Book) => {
        const dateA = a.volumeInfo.publishedDate
          ? a.volumeInfo.publishedDate
          : "";
        const dateB = b.volumeInfo.publishedDate
          ? b.volumeInfo.publishedDate
          : "";
        return dateA.localeCompare(dateB);
      });
      queryClient.setQueryData<Book[]>(["books"], sorted);
    } else {
      queryClient.setQueryData<Book[]>(["books"], originalData);
    }
  }, [selectedValue, books, originalData]);

  return (
    <>
      <h1 className={styles.title}>Books on Flowers</h1>
      <label className={styles.label__sort}>
        Sort By:
        </label>
        <select role="select" className={styles.dropdown__sort} onChange={handleClick}>
          <option value="None">None</option>
          <option value="Author">Author</option>
          <option value="Title">Title</option>
          <option value="Published Date">Published Date</option>
        </select>
    </>
  );
};

export default Header;
