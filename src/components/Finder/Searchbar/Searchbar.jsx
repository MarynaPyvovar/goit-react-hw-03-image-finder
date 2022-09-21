import React, { Component } from "react";
import css from "../Searchbar/Searchbar.module.css"

export default class Searchbar extends Component {
    state = {
        searchInput: '',
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
    }

    render() {
        return <header class={css.header}>
            <form className={css.searchForm}>
                <button type="submit" className={css.searchFormButton}>
                    <span className={css.searchFormButtonLabel}>Search</span>
                </button>
                <input
                    onChange={this.handleChange}
                    className={css.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    }
}