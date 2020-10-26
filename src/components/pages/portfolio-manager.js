import React, { Component } from "react";
import axios from "axios";

class PortfolioManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItems: [],
    };
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
