import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "semantic-ui-react";
import { getUsers } from "../redux/actions/actions";
import User from "./User";
const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    const user = useSelector((state) => state.reducer.users);

    return (
        <div>
            <h1 style={{ color: "brown", justifyContent: "center" }}>
                List of users
            </h1>
            <Card.Group>
                {user.map((user, i) => (
                    <User user={user} key={i} />
                ))}
            </Card.Group>
        </div>
    );
};

export default UserList;
