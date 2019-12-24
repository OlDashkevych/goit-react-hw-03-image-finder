import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onClick }) => {
  const { smallImg, largeImg, alt } = item;
  return (
    <li
      role="presentation"
      onClick={onClick}
      className={styles.imageGalleryItem}
    >
      <img
        src={smallImg}
        data-largeImg={largeImg}
        alt={alt}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    smallImg: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
