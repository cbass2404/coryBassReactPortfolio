import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

class PortfolioManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItems: [],
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    // TODO
    // update portfolioItems state
    // and add the portfolioItem to the list
  }

  handleFormSubmissionError(err) {
    console.log("handleFormSubmissionError", err);
  }

  getPortfolioItems() {
    axios
      .get("https://corybass.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          portfolioItems: [...res.data.portfolio_items],
        });
      })
      .catch((err) => {
        console.log("error in get porfolioitems", err);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>
        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}

export default PortfolioManager;
