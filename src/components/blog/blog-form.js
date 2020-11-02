import React, { Component } from "react";

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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    this.props.handleSuccessfullFormSubmission(this.state);
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
