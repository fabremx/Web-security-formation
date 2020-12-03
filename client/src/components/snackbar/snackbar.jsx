import React from "react";
import Styles from "./snackbar.module.scss";

export class Snackbar extends React.Component {
  isActive = false;
  massage = "";
  type = "";

  static show(message, type) {
    Snackbar.__singletonRef.__show(message, type);
  }

  constructor(props) {
    super(props);
    Snackbar.__singletonRef = this;

    this.state = {
      isActive: false,
      message: "",
      type: "",
    };
  }

  __show(message, type) {
    this.setState({ isActive: true, message, type });

    setTimeout(() => {
      this.setState({ isActive: false });
    }, 3000);
  }

  render() {
    if (this.state.isActive) {
      return (
        <div
          className={`${Styles[this.state.type]} ${
            this.state.isActive ? [Styles.snackbar, Styles.fadeIn].join(" ") : [Styles.snackbar, Styles.fadeOut].join(" ")
          }`}
        >
          {this.state.message}
        </div>
      );
    }
    return null;
  }
}
