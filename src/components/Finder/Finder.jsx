import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {Button} from "./Button/Button";
// import {Loader} from "./Loader/Loader";
import {Modal} from "./Modal/Modal";

export default class Finder extends Component {
    render() {
        return <>
            <Searchbar />
            <ImageGallery />
            <Button />
            {/* <Loader /> */}
            <Modal />
        </>
    }
}