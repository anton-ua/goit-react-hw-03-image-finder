import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  handleModalOpen
}) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      srcSet={largeImageURL}
      alt={tags}
      onClick={handleModalOpen}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleModalOpen: PropTypes.func.isRequired
};

export default ImageGalleryItem;
