import React from "react";
import PropTypes from "prop-types";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({modalOpen, item}) => {
    return <li className={css.imageGalleryItem} onClick={()=> modalOpen(item.id)}>
        <img className={css.imageGalleryItemImage} src={item.webformatURL} alt={item.tags} />
    </li>
}

ImageGalleryItem.propTypes = {
    modalOpen: PropTypes.func.isRequired,
    item: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
}