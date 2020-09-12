import { SET_SIDEBAR_LINKS } from "./types";

export function setSidebarLinks(links) {
  return {
    type: SET_SIDEBAR_LINKS,
    payload: links,
  };
}
