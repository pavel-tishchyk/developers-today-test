import { ThunkAction } from 'redux-thunk'
import apiRequests from '../api';
import { 
  setPosts,
  addPost,
  changePost,
  deletePost, 
  addComment } from "../actions";
import { Post, CommentData } from '../types';
import { State } from '../reducers';
import { Action } from '../actions/types';
import Router from 'next/router';

export const getPostsTC = (): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.getPostsData()
      .then(data => {
        return Promise.all(data.map(({id}) => apiRequests.getComments(id)))  
      })
      .then(posts => dispatch(setPosts(posts))); 
  }

export const addPostTC = (post: Post): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.addPost(post)
      .then(data => dispatch(addPost(data)));
    Router.push("/");
  }

export const changePostTC = (post: Post): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.updatePost(post)
    dispatch(changePost(post))
    Router.push('/')
  }

export const deletePostTC = (postId: number): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.deletePost(postId)
    dispatch(deletePost(postId))
  }

export const addCommentTC = (commentData: CommentData): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.addComment(commentData)
      .then(comment => dispatch(addComment(comment)))
  }
