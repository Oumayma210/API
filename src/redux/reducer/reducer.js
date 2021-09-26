import { FAILED, GET_USERS,GET_POSTS } from "./../actions/actionsTypes";
const initialState = {
    users: [],
    errors: [],
    posts: [],
    comments: [],
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return { ...state, users: payload };
            case GET_POSTS:
                return { ...state, posts: payload };
        case FAILED:
            return { ...state, errors: payload };
        default:
            return state;
    }
};
