import React, { Component } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.handleModalClose);
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.props.handleModalClose}>
        <div className={styles.Modal}>
          <img src={this.props.src} alt="modal" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};
