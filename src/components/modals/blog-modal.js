import React, { Component } from "react";
import ReactModal from "react-modal";

class BlogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ReactModal isOpen={true}>
        <h1>I'm in a modal</h1>
      </ReactModal>
    );
  }
}

export default BlogModal;
