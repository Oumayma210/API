import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/actions";
import User from "./User";
const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    const users = useSelector((state) => state.reducer.users)

    return (
        <div>
            {users.map((user, i) => (
                <User user={user} key={i} />
            ))};
        </div>
    );
};

export default UserList;
