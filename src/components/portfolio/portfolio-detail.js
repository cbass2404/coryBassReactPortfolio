import React, { Component } from "react";
import axios from "axios";

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {},
    };

    this.getPortfolioItem = this.getPortfolioItem.bind(this);
  }

  getPortfolioItem() {
    axios
      .get(
        `https://corybass.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((res) => {
        this.setState({
          portfolioItem: res.data.portfolio_item,
        });
      })
      .catch((err) => {
        console.log("portfolio-detail getPortfolioItem", err);
      });
  }

  componentDidMount() {
    this.getPortfolioItem();
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default PortfolioDetail;
