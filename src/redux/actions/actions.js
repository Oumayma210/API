import axios  from "axios";
import {  GET_USERS,FAILED } from "./actionsTypes";

export const getUsers = () => async (dispatch) => {
    try {
        let result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({
            type: GET_USERS,

            payload: result,
        });
    } catch (error) {
        dispatch({
            type: FAILED,
            payload: error,
        });
    }
};
