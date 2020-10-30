import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogItem from "../blog/blog-item";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.activateInfiniteScroll();
  }

  activateInfiniteScroll() {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log("get more posts");
      }
    };
  }

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    axios
      .get("https://corybass.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          blogItems: res.data.portfolio_blogs,
          totalCount: res.data.meta.total_records,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("getBlogItems ERROR:", err);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map((blogItem) => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });
    return (
      <div className="blog-container">
        <div className="content-container">{blogRecords}</div>
        {this.state.isLoading ? (
          <div className="content-loader">
            <FontAwesomeIcon icon="spinner" spin />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Blog;
