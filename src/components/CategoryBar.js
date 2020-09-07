import React from "react";

function CategoryBar() {
  return (
    <div className="categories">
      <div className="categories__title">
        <h2>Categories</h2>
      </div>

      <div className="categories__options">
        <p>All</p>
        <p>Men</p>
        <p>Women</p>
        <p>Hats</p>
        <p>Skirts</p>
        <p>Jackets</p>
        <p>Socks</p>
        <p>T-Shirts</p>
        <p>Dresses</p>
      </div>
    </div>
  );
}

export default CategoryBar;
