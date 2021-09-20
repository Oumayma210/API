import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./../redux/actions/actions";
import User  from './User';

export const Userlist = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    useEffect(() => dispatch(getUsers()), );
    return (
        <div>
            {users.map((user, key) => (
        <User user={user} key={key}/>
      ))}
        </div>
    );
};

