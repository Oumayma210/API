import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const User = ({ user }) => (
    <Card style={{ display: "flex", margin: "auto" }}>
        <Card.Content>
            <Image
                floated="right"
                size="small"
                src="https://th.bing.com/th/id/R.437da161e3f3957fb166f7445a759132?rik=DhTY7lMUNGFh%2bA&pid=ImgRaw&r=0"
            />
            <Card.Header>{user.name}</Card.Header>
            <Card.Meta>{user.username}</Card.Meta>
            <Card.Description>
                E-mail: <strong>{user.email} </strong>
                <br />
                Adress:{" "}
                <strong>
                    {user.address.city}, {user.address.street}
                </strong>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className="ui two buttons">
                <Link to={`/profile/${user.id}`}>
                    <Button basic color="green">
                        Approve
                    </Button>
                </Link>
            </div>
        </Card.Content>
    </Card>
);

export default User;
