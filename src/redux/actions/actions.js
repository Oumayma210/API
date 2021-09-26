import axios from "axios";
import { GET_USERS, FAILED, GET_POSTS,GET_USER_BY_ID } from "./actionsTypes";
//get all users
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
//get userbyid
export const getUser = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}` );
    dispatch({
      type: GET_USER_BY_ID,
      payload: result.data,  
    });
  } catch (error) {
    dispatch({
      type: FAILED,
      payload: error
    });
  }
}; 
//getpost by userid
export const getPosts = (id) => async (dispatch) => {
  dispatch(getUser(id))
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
