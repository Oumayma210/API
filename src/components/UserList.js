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
        <Card.Group>
            {user.map(
                (
                    user,
                    i 
                ) => (
                    <User user={user} key={i} />
                )
            )}
        </Card.Group>
    );
};

export default UserList;
