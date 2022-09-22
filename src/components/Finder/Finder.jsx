import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {Button} from "./Button/Button";
import {Loader} from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

import { searchImages } from '../../shared/api/images';

export default class Finder extends Component {
    state = {
        items: [],
        searchInput: '',
        modal: false,
        dataModal: {},
        loading: false,
        error: null,
        page: 1,
    }

    handleFormSubmit = input => {
        this.setState({
            searchInput: input,
        });

        // this.fetchImages()
    }

    onModalOpen = (id) => {
        const imageToOpen = this.state.items.find(item => item.id === id);
        
        this.setState({
            modal: true,
            dataModal: imageToOpen,
        })
    }

    onLoadMoreClick = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        })
        this.fetchImages()
    }

//     componentDidUpdate(_, prevState) {
//     const { page } = this.state;
//     if (prevState.page !== page) {
//         this.fetchImages();
//     }
//   }

    async fetchImages() {
    const { searchInput, page } = this.state;
    this.setState({
        loading: true,
    });

    try {
        const data = await searchImages(searchInput, page);
        console.log(data.hits)
        this.setState(({items}) => {
            return {
                items: [...items, ...data.hits]
            }
        })
    } catch (error) {
        this.setState({
            error
        })
    }
    finally {
        this.setState({
            loading: false
        })
    }
    }

    

    render() {
        const { items, modal, loading, dataModal } = this.state;
        const isData = Boolean(items.length);
        return <>
            <Searchbar onSubmit={this.handleFormSubmit} />
            {isData && <ImageGallery modalOpen={this.onModalOpen} data={items} />}
            <Button onClick={this.onLoadMoreClick} />
            {loading && <Loader />}
            {modal && <Modal data={dataModal} />}
        </>
    }
}