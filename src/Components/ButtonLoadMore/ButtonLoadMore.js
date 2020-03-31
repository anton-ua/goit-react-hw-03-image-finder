import React from "react";
import styles from "./ButtonLoadMore.module.css";
import PropTypes from "prop-types";

const ButtonLoadMore = ({ onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    Load More
  </button>
);

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonLoadMore;
