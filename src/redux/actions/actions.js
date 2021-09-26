import axios from "axios";
import { GET_USERS, FAILED, GET_POSTS } from "./actionsTypes";

export const getUsers = () => async (dispatch) => {
  try {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users ");
    dispatch({
      type: GET_USERS,
      payload: result.data,  
    });
  } catch (error) {
    dispatch({
      type: FAILED,
      payload: error
    });
  }
}; 
export const getPosts = (id) => async (dispatch) => {
    try {
      let result = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1 ");
      dispatch({
        type: GET_POSTS,
        payload: result.data,  
      });
    } catch (error) {
      dispatch({
        type: FAILED,
        payload: error
      });
    }
  }; 