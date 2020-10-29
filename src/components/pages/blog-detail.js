import React, { Component } from "react";
import axios from "axios";

class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      BlogItem: {},
    };
  }

  getBlogItem() {
    axios
      .get(
        `https://corybass.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log("getBlogItem ERROR:", err);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    console.log("currentId", this.state.currentId);
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    );
  }
}

export default BlogDetail;
