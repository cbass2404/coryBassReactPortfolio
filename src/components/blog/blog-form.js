import React, { Component } from "react";
import axios from "axios";

import RichTextEditor from "../forms/rich-text-editor";

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
      content: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(
      this
    );
  }

  handleRichTextEditorChange(content) {
    this.setState({ content });
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.content);

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
        this.setState({
          title: "",
          blog_status: "",
        });

        this.props.handleSuccessfullFormSubmission(res.data.portfolio_blog);
      })
      .catch((e) => {
        console.log("handleSubmit for blog ERROR:", e);
      });

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
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
        </div>

        <div className="one-column">
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
          />
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}

export default BlogForm;
