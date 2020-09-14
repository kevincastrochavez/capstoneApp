import { SET_SIDEBAR_LINKS, CHANGE_SIDEBAR_ACTIVE } from "../actions/types";

const INITIAL_STATE = {
  sidebarLinks: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SIDEBAR_LINKS:
      return {
        ...state,
        sidebarLinks: action.payload,
      };
    case CHANGE_SIDEBAR_ACTIVE:
      const sidebarLinks = state.sidebarLinks.map((link) => {
        link.active = false;
        if (link._id == action.payload) {
          link.active = true;
        }
        return link;
      });
      return {
        ...state,
        sidebarLinks,
      };
    default:
      return state;
  }
}
