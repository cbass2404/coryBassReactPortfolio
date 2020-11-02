import React, { Component } from "react";
import axios from "axios";

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

    return formData;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    axios
      .post(
        "https://corybass.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      )
      .then((res) => {
        this.props.handleSuccessfullFormSubmission(res.data.portfolio_blog);

        this.setState({
          title: "",
          blog_status: "",
        });
      })
      .catch((e) => {
        console.log("handleSubmit for blog ERROR:", e);
      });

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
          placeholder="Blog Title"
        />
        <input
          name="blog_status"
          value={this.state.blog_status}
          onChange={this.handleChange}
          type="text"
          placeholder="Blog Status"
        />

        <button>Save</button>
      </form>
    );
  }
}

export default BlogForm;
