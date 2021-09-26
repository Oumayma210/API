import React, { useEffect } from "react";
import { Image, Item,Button } from "semantic-ui-react";
import { getComments } from "../redux/actions/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Posts = ({ post }) => {
    const dispatch = useDispatch();
    // useEffect(() => dispatch(getComments(post.id)), []);
    const comments = useSelector((state) => state.reducer.comments);
    return (
            <Item>
                {/* <Item.Image size='small' src="https://th.bing.com/th/id/R.437da161e3f3957fb166f7445a759132?rik=DhTY7lMUNGFh%2bA&pid=ImgRaw&r=0" /> */}

                <Item.Content>
                    <Item.Header as="a">{post.title}</Item.Header>
                    <Item.Meta>{post.body}</Item.Meta>
                    <Item.Description> {comments.map((el) => (
                <p>{el.name}</p>
            ))}</Item.Description>
                </Item.Content>
                
               
            </Item>
                    
// {/*             
//              {comments.map((el) => (
//               <p>{el.name}</p>
//           ))} */}
        
    );
};

export default Posts;
