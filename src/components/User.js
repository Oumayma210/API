import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import "./User.css";
import { getPosts } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const User = ({ user }) => {
    const dispatch = useDispatch();
    return (
        <Card className="card">
            {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
            <Card.Content>
                <Card.Header>{user.name}</Card.Header>
                <Card.Meta>
                    <span className="date">{user.username}</span>
                </Card.Meta>
                <Card.Description>{user.website}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="phone" />
                    {user.phone}
                </a>
            </Card.Content>
            <div className="ui two buttons">
                <Button
                    basic
                    color="green"
                    onClick={() => dispatch(getPosts(user.id))}
                >
                    Profile
                </Button>
            </div>
        </Card>
    );
};
export default User;
