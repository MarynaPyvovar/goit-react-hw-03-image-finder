import React from "react";
import PropTypes from "prop-types";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css"

export const ImageGalleryItem = () => {
    return <li className={css.imageGalleryItem}>
        <img className={css.imageGalleryItemImage} src="" alt="" />
        <p>IMAGE</p>
    </li>
}