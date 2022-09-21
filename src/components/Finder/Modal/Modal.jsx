import React from "react";
import PropTypes from "prop-types";
import css from "../Modal/Modal.module.css"

export const Modal = () => {
    return <div className={css.overlay}>
        <div className={css.modal}>
            <img src="" alt="" />
            <p>MODAL</p>
        </div>
    </div>
}