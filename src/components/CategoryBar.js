import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import ProductsContainer from "./Products/ProductsContainer";

class CategoryBar extends Component {
  componentDidMount() {
    const sidebarLinks = [
      {
        _id: 0,
        category: "All",
        active: true,
        component: <ProductsContainer category={"All"} />,
      },
      {
        _id: 1,
        category: "Men",
        active: false,
        component: <ProductsContainer category={"Men"} />,
      },
      {
        _id: 2,
        category: "Women",
        active: false,
        component: <ProductsContainer category={"Women"} />,
      },
      {
        _id: 3,
        category: "Hats",
        active: false,
        component: <ProductsContainer category={"Hats"} />,
      },
      {
        _id: 4,
        category: "Skirts",
        active: false,
        component: <ProductsContainer category={"Skirts"} />,
      },
      {
        _id: 5,
        category: "Jackets",
        active: false,
        component: <ProductsContainer category={"Jackets"} />,
      },
      {
        _id: 6,
        category: "Socks",
        active: false,
        component: <ProductsContainer category={"Socks"} />,
      },
      {
        _id: 7,
        category: "T-Shirts",
        active: false,
        component: <ProductsContainer category={"T-Shirts"} />,
      },
      {
        _id: 8,
        category: "Dresses",
        active: false,
        component: <ProductsContainer category={"Dresses"} />,
      },
    ];

    this.props.setSidebarLinks(sidebarLinks);
  }

  renderContent() {
    let jsx;
    if (this.props.sidebarLinks) {
      this.props.sidebarLinks.forEach((link) => {
        if (link.active) {
          jsx = link.component;
        }
      });
    }
    return jsx;
  }

  render() {
    return (
      <div className="categories">
        <div className="categories__options">
          {this.renderContent()}

          <div className="categories__options-links">
            <div className="categories__options-title">
              <h2>Categories</h2>
            </div>

            {this.props.sidebarLinks.map((link, index) => {
              return (
                <a
                  className={`categories__options-links-link ${
                    link.active ? "color-text" : ""
                  }`}
                  key={index}
                  onClick={() => this.props.changeSidebarActive(link._id)}
                >
                  {link.category}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { sidebarLinks } = state.sidebar;
  return {
    sidebarLinks,
  };
}

export default connect(mapStateToProps, actions)(CategoryBar);
