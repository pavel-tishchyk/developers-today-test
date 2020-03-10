import React, { FC } from 'react';
import PostCard from '../PostCard';
import { Card, Button, Icon } from 'semantic-ui-react';
import Router from 'next/router';
import { Post, CommentData } from '../../types';

type Props = {
  postsData: Array<Post>
  deletePost: (postId: number) => void
  addComment: (comment: CommentData) => void
}

const Posts: FC<Props> = (props) => {
  const { postsData, deletePost, addComment } = props;

  const postsElements = postsData
    .map(post => <PostCard 
      key={post.id} 
      post={post} 
      deletePost={deletePost} 
      addComment={addComment}/>
    )

  const addPost = () => {
    Router.push("/posts/new");
  }
  
  return (
    <Card.Group>
      <Button 
        icon fluid primary
        onClick={addPost}
        size='massive'
        style={{
          margin: '0.5em .25em'
        }}
      >
        <Icon name='add'/>
        </Button>
      {postsElements}
    </Card.Group>
  );
}

export default Posts;
