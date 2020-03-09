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
      {postsElements}
      <Button 
        icon circular primary
        onClick={addPost}
        size='massive'
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          transform: 'translate(-100%, -50%)'
        }}>
          <Icon name='add'/>
        </Button>
    </Card.Group>
  );
}

export default Posts;
