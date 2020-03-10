import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getPostsTC, deletePostTC, addCommentTC } from '../thunks';
import Posts from '../components/Posts';
import { State } from '../reducers';

const IndexPage: FC<ReduxProps> = (props) => {
  const { postsData, getPostsTC, deletePostTC, addCommentTC } = props;

  React.useEffect(()=> {
    getPostsTC();
  },[getPostsTC])

  return (
    <Posts 
      postsData={postsData}
      deletePost={deletePostTC}
      addComment={addCommentTC}/>
  );
}

const mapStateToProps = (state: State) => ({
  postsData: state.posts.postsData
})

const mapDispatchToProps = {
  getPostsTC,
  deletePostTC,  
  addCommentTC
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default connector(IndexPage)
