import React, { FC } from 'react';
import { Comment } from 'semantic-ui-react'
import { Comment as CommentType } from '../../types';

type Props = {
  comment: CommentType
}

const CommentCard: FC<Props> = (props) => {
  const { comment: { body } } = props;

  return (
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Pavel</Comment.Author>
        <Comment.Text>{body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

export default CommentCard;
