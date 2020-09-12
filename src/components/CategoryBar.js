import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryBar extends Component {
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
                onClick={() => console.log("trying to switch link")}
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

export default connect(mapStateToProps)(CategoryBar);
