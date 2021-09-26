import { FAILED, GET_USERS, GET_POSTS,GET_USER_BY_ID } from "./../actions/actionsTypes";
const initialState = {
    users: [],
    errors: [],
    posts: [],
    comments: [],
    user: {},
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return { ...state, users: payload };
        case GET_POSTS:
            return { ...state, posts: payload };
        case GET_USER_BY_ID:
            return { ...state, user: payload };
        case FAILED:
            return { ...state, errors: payload };
        default:
            return state;
    }
};
