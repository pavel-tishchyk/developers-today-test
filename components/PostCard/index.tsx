import React, { FC } from 'react';
import Router from 'next/router';
import { Card, Button, Icon } from 'semantic-ui-react';
import Comments from '../Comments';
import { Post, CommentData} from '../../types';

type Props = {
  post: Post
  deletePost: (postId: number) => void
  addComment: (comment: CommentData) => void
}

const PostCard: FC<Props> = (props) => {
  const { post: {id, title, body, comments}, deletePost, addComment } = props;

  const editPost = () => {
    Router.push("/posts/[id]", `/posts/${id}`)
  }

  return (
    <Card fluid>
      <Card.Content>
        <Button.Group floated='right'>
            <Button 
              icon
              onClick={editPost}>
                <Icon name='pencil' />
            </Button>
          <Button
            icon
            onClick={() => deletePost(id)}>
              <Icon name='delete' />
          </Button>
        </Button.Group>
        <Card.Header>
          {title}
        </Card.Header>
      </Card.Content>
      <Card.Content description={body} />
      <Card.Content extra >
        <Comments 
          commentsData={comments} 
          addComment={addComment} 
          postId={id}/>
      </Card.Content>
    </Card>
  );
}

export default PostCard;