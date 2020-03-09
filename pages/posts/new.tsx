import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PostForm from '../../components/PostForm';
import { addPostTC } from '../../thunks';

const New: FC<ReduxProps> = (props) => {
  const { addPostTC } = props;

  return <PostForm onSubmit={addPostTC}/>
}

const mapDispatchToProps = {
  addPostTC
}

const connector = connect(null, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default connect(null, mapDispatchToProps)(New);
