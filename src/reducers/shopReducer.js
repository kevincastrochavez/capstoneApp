import // SET_SHOP_CATEGORIES
"../actions/types";

const INITIAL_STATE = {
  categories: [],
  selectedCategory: "All",
  productsSelected: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case SET_SHOP_CATEGORIES:
    //     return {
    //         ...state,
    //         categories: action.payload
    //     }
    default:
      return state;
  }
}
