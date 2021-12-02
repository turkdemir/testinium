import axios from "axios";
import { CANDIDATE_GET_SUCCESS, CANDIDATE_GET_FAIL } from "./types";


console.log(process.env.NODE_ENV)

const API_url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_MODE
    : process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRO_MODE
    : process.env.REACT_APP_TEST_MODE;

export const getCandidates = () => async (dispatch) => {
  //console.log("get candidates calıstı")
  try {
    const { data } = await axios.get(`${API_url}/users`);
    console.log(data);
    dispatch({
      type: CANDIDATE_GET_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: CANDIDATE_GET_FAIL,
    });
    return error.response
      ? error.response.data.message
      : "Beklenmedik bir hata oluştu!";
  }
};
