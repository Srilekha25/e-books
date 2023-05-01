import React, { useEffect, useState } from 'react'
import styles from "../SearchBar/SearchBar.module.scss";

type Props = {}

const SearchBar = () => {
     //Sets input value
  const [inputValue, setInputValue] = useState("flowers");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: any) =>{
    setInputValue(e.target.value);
    console.log("inputValue->",inputValue);
  }

  return (
    <div className={styles.container__searchBar}>
      <div>
        <input
          className={styles.container__searchBar__inputfield}
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="input__text"
          required
        />
        <button
          className={styles.button__searchBar__submit}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar