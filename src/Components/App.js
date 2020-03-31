import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ButtonLoadMore from "./ButtonLoadMore/ButtonLoadMore";
import Modal from "./Modal/Modal";
import * as imagesApi from "../Services/Service";
import styles from "./App.module.css";
import Loader from "react-loader-spinner";

export default class App extends Component {
  state = {
    images: [],
    search: "",
    page: 1,
    loaderVisible: false,
    modal: false
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    await this.setState({ page: 1, images: [] });

    this.FetchImages(this.state.search);
  };

  handleLoad = async () => {
    await this.setState(state => ({
      page: state.page + 1
    }));
    this.FetchImages(this.state.search, this.state.page);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      this.setState({ loaderVisible: false });
      if (this.state.page > 1)
        window.scrollTo({
          top:
            document.documentElement.scrollTop +
            document.documentElement.clientHeight -
            140,
          behavior: "smooth"
        });
    }
  }

  FetchImages = (search, page) => {
    this.setState({ loaderVisible: true });
    imagesApi
      .FetchImages(search, page)
      .then(({ data }) => {
        this.setState(state => ({
          images: [...state.images, ...data.hits]
        }));
      })
      .catch(console.log);
  };

  handleModalOpen = ({ target }) => {
    if (target.nodeName === "IMG") {
      this.setState({ modal: target.srcset });
    }
  };

  handleModalClose = ({ target, key }) => {
    if (target.nodeName === "DIV" || key === "Escape") {
      this.setState({ modal: false });
    }
  };

  render() {
    const { images, search, loaderVisible, modal } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={search}
        />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleModalOpen={this.handleModalOpen}
          />
        )}
        {modal && (
          <Modal src={modal} handleModalClose={this.handleModalClose} />
        )}

        {loaderVisible && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={120}
            width={120}
            className={styles.Loader}
          />
        )}
        {images.length > 0 && <ButtonLoadMore onClick={this.handleLoad} />}
      </div>
    );
  }
}
