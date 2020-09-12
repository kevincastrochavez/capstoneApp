import {
  // SET_SHOP_CATEGORIES
  SET_SIDEBAR_LINKS,
} from "./types";

export function fetchShopCategories() {
  return {
    type: SET_SIDEBAR_LINKS,
    payload: [
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
        _id: 5,
        category: "T-Shirts",
        active: false,
      },
      {
        _id: 6,
        category: "Dresses",
        active: false,
      },
    ],
  };
}
