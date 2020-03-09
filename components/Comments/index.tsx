import React, { FC } from 'react';
import CommentCard from '../CommentCard';
import CommentForm from '../CommentForm';
import { Comment, Header } from 'semantic-ui-react';
import { Comment as CommentType, CommentData } from '../../types';

type Props =  {
  commentsData: Array<CommentType>
  postId: number
  addComment: (comment: CommentData) => void
} 

const Comments: FC<Props> = (props) => {
  const { commentsData, addComment, postId } = props;

  const commentsElements = commentsData
    .map(comment => <CommentCard key={comment.id} comment={comment}/>) 

  const onSubmit = (commentData: {body: string}) => {
    addComment({...commentData, postId})
  }

  return (
    <Comment.Group size='mini'>
      <Header as='h5'>
        Comments
      </Header>
      {commentsElements}
      <CommentForm onSubmit={onSubmit} form={`comment_post_${postId}`}/>
    </Comment.Group>
  );
}

export default Comments;