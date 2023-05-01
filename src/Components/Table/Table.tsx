import React from "react";
import GetBooks from "../GetBooks/GetBooks";
import styles from "../Table/Table.module.scss";

const Table = () => {
  return (
    <section className={styles.Table__wrapper}>
      <table className={styles.Table__books}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
            <GetBooks />
        </tbody>
      </table>
    </section>
  );
};

export default Table;
