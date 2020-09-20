import { FETCH_USER_INFORMATION } from "../actions/types";

const INITIAL_STATE = {
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_USER_INFORMATION:
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}
