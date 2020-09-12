import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CategoryBar extends Component {
  componentDidMount() {
    const sidebarLinks = [
      {
        _id: 0,
        category: "All",
        active: true,
      },
      {
        _id: 1,
        category: "Men",
        active: false,
      },
      {
        _id: 2,
        category: "Women",
        active: false,
      },
      {
        _id: 3,
        category: "Hats",
        active: false,
      },
      {
        _id: 4,
        category: "Skirts",
        active: false,
      },
      {
        _id: 5,
        category: "Jackets",
        active: false,
      },
      {
        _id: 6,
        category: "Socks",
        active: false,
      },
      {
        _id: 7,
        category: "T-Shirts",
        active: false,
      },
      {
        _id: 8,
        category: "Dresses",
        active: false,
      },
    ];

    this.props.setSidebarLinks(sidebarLinks);
  }

  render() {
    return (
      <div className="categories">
        <div className="categories__title">
          <h2>Categories</h2>
        </div>

        <div className="categories__options">
          {this.props.sidebarLinks.map((link, index) => {
            return (
              <a
                className={`categories__options-link ${
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
