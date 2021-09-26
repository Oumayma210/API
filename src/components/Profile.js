import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item,Button } from "semantic-ui-react";
import { getPosts } from "../redux/actions/actions";
import Posts from "./Post";
import { Card, Icon } from 'semantic-ui-react'

const Profile = ({ match, history }) => {
    const dispatch = useDispatch();
    useEffect(
        () => dispatch(getPosts(match.params.id)),

        [match.params]
    ); 
    const user=useSelector((state)=>state.reducer.user)
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

            
  <Card centered={true}
    image='https://th.bing.com/th/id/R.437da161e3f3957fb166f7445a759132?rik=DhTY7lMUNGFh%2bA&pid=ImgRaw&r=0'
    header={user.name}
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />

            {posts.map((post, i) => (
                <Posts post={post} key={i} />
            ))}
        </Item.Group>
    );
};

export default Profile;
