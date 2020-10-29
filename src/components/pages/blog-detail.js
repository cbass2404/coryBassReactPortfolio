import React, { Component } from "react";
import axios from "axios";

class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
    };
  }

  getBlogItem() {
    axios
      .get(
        `https://corybass.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((res) => {
        this.setState({
          blogItem: res.data.portfolio_blog,
        });
      })
      .catch((err) => {
        console.log("getBlogItem ERROR:", err);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status,
    } = this.state.blogItem;
    return (
      <div>
        <h1>{title}</h1>
        <img src={featured_image_url} />
        <div>{content}</div>
      </div>
    );
  }
}

export default BlogDetail;
