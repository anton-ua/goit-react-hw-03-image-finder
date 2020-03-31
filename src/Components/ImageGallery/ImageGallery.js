import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, handleModalOpen }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        handleModalOpen={handleModalOpen}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleModalOpen: PropTypes.func.isRequired
};

export default ImageGallery;
