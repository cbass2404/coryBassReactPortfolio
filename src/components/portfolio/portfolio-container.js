import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [],
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios
            .get(
                "https://corybass.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc"
            )
            .then((response) => {
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter((item) => {
                            return item.category === filter;
                        }),
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    portfolioItems() {
        return this.state.data.map((item) => {
            return <PortfolioItem key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) return <div>Loading...</div>;
        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button
                        className="btn"
                        onClick={() => this.handleFilter("ReactJS")}
                    >
                        ReactJS
                    </button>

                    <button
                        className="btn"
                        onClick={() => this.handleFilter("React Native")}
                    >
                        React Native
                    </button>

                    <button
                        className="btn"
                        onClick={() => this.handleFilter("NodeJS")}
                    >
                        NodeJS
                    </button>

                    <button
                        className="btn"
                        onClick={() => this.handleFilter("Python")}
                    >
                        Python
                    </button>

                    <button
                        className="btn"
                        onClick={() => this.handleFilter("Fundamentals")}
                    >
                        Fundamentals
                    </button>

                    <button
                        className="btn"
                        onClick={() => this.handleFilter("CLEAR_FILTERS")}
                    >
                        All
                    </button>
                </div>
                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        );
    }
}
