import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../BackButton/BackButton.module.scss";

type Props = {};

const BackButton = (props: Props) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className={styles.BackButton}>
      Back
    </button>
  );
};

export default BackButton;
