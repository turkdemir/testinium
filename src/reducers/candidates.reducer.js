import {CANDIDATE_GET_SUCCESS, CANDIDATE_GET_FAIL} from "../actions/types.js";


export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case CANDIDATE_GET_SUCCESS:
      return payload
    case CANDIDATE_GET_FAIL:
      return state
    default:
      return state;
  }
}