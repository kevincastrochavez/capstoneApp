import { SET_SIDEBAR_LINKS } from "../actions/types";

const INITIAL_STATE = {
  sidebarLinks: [
    {
      category: "All",
      active: true,
    },
    {
      category: "Men",
      active: false,
    },
  ],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SIDEBAR_LINKS:
      return {
        ...state,
        sidebarLinks: action.payload,
      };
    default:
      return state;
  }
}
