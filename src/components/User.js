import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const User = () => (
    <Card>
        <Card.Content>
            <Image
                floated="right"
                size="mini"
                src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>Hello</Card.Header>
            <Card.Meta>h</Card.Meta>
            <Card.Description>E-mail </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className="ui two buttons">
                <Button basic color="green">
                    Approve
                </Button>
            </div>
        </Card.Content>
    </Card>
);

export default User;
