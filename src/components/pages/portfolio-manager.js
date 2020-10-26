import React, { Component } from "react";

class PortfolioManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <h1>Portfolio form...</h1>
        </div>
        <div className="right-column">
          <h1>Portfolio sidebar...</h1>
        </div>
      </div>
    );
  }
}

export default PortfolioManager;
