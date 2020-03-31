import React from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ onChange, onSubmit, value }) => (
  <div className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit">
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={value}
      />
    </form>
  </div>
);

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Searchbar;
