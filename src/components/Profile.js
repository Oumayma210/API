import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item,Button } from "semantic-ui-react";
import { getPosts } from "../redux/actions/actions";
import Posts from "./Post";

const Profile = ({ match, history }) => {
    const dispatch = useDispatch();
    useEffect(
        () => dispatch(getPosts(match.params.id)),

        [match.params]
    );
    const posts = useSelector((state) => state.reducer.posts);
    return (
        <Item.Group>
            <Button
                style={{ width: "90px", height: "40px", color:'white',backgroundColor:'black', fontSize:'16px', fontStyle:'italic'}}
                onClick={() => history.goBack()}
            >
                return
            </Button>

            <h1 style={{ fontStyle: "italic" }}>Profile {match.params.id}</h1>
            {posts.map((post, i) => (
                <Posts post={post} key={i} />
            ))}
        </Item.Group>
    );
};

export default Profile;
