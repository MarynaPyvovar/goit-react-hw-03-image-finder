import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = () => {
    return <ul className={css.imageGallery}>
        <ImageGalleryItem />
    </ul>
}