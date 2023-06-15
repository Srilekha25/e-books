import React from "react";
import GetBooks from "../GetBooks/GetBooks";
import styles from "../Table/Table.module.scss";
import Header from "../Header/Header";

const Table = () => {
  return (
    <section className={styles.Table__wrapper}>
      <Header />
      <table role="table" className={styles.Table__books}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Publisher</th>
            <th>Published Date</th>
          </tr>
        </thead>
        <tbody>
          <GetBooks />
        </tbody>
      </table>
      <p>
        <strong>By Srilekha</strong>
      </p>
    </section>
  );
};

export default Table;
