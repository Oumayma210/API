import React from 'react'
import { Image, Item } from 'semantic-ui-react'
import { getPosts } from '../redux/actions/actions'

const Posts= ({post}) => (
    <Item>
      {/* <Item.Image size='small' src="https://th.bing.com/th/id/R.437da161e3f3957fb166f7445a759132?rik=DhTY7lMUNGFh%2bA&pid=ImgRaw&r=0" /> */}

      <Item.Content>
        <Item.Header as='a'>{post.title}</Item.Header>
        <Item.Meta>{post.body}</Item.Meta>
        <Item.Description>
        </Item.Description>
      </Item.Content>
    </Item>

  
  
)

export default Posts
