import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useRouter } from 'next/router'
import PostForm from '../../../components/PostForm'
import { changePostTC, getPostsTC } from '../../../thunks';
import { State } from '../../../reducers';

const Post: FC<ReduxProps> = (props) => {
  const { postsData, getPostsTC, changePostTC } = props;
  
  const { id } = useRouter().query;
  
  const post = postsData.find((post) => post.id === +id);

  React.useEffect(() => {
    if(postsData.length === 0) {
      getPostsTC();
    }
  }, [postsData, getPostsTC])

  return (
  <PostForm 
    post={post}
    onSubmit={changePostTC}/>
  )
};

const mapStateToProps = (state: State) => ({
  postsData: state.posts.postsData
})

const mapDispatchToProps = {
  getPostsTC,
  changePostTC
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default connect(mapStateToProps, mapDispatchToProps)(Post);
