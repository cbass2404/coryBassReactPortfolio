import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogItems: [],
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios
      .get("https://corybass.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          blogItems: res.data.portfolio_blogs,
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
    return (
      <div>
        <h2>Blog</h2>
        <div>
          <Link to="/about-me">Read more about myself</Link>
        </div>
      </div>
    );
  }
}

export default Blog;
