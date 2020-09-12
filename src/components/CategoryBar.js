import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CategoryBar extends Component {
  componentDidMount() {
    this.props.setSidebarLinks();
  }

  render() {
    return (
      <div className="categories">
        <div className="categories__title">
          <h2>Categories</h2>
        </div>

        <div className="categories__options">
          {/* <p>All</p>
          <p>Men</p>
          <p>Women</p>
          <p>Hats</p>
          <p>Skirts</p>
          <p>Jackets</p>
          <p>Socks</p>
          <p>T-Shirts</p>
          <p>Dresses</p> */}
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
