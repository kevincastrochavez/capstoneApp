import { SET_SIDEBAR_LINKS, CHANGE_SIDEBAR_ACTIVE } from "./types";

export function setSidebarLinks(links) {
  return {
    type: SET_SIDEBAR_LINKS,
    payload: links,
  };
}

export function changeSidebarActive(_id) {
  return {
    type: CHANGE_SIDEBAR_ACTIVE,
    payload: _id,
  };
}
