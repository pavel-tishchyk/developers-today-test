import { ThunkAction } from 'redux-thunk'
import apiRequests from '../api';
import { 
  setPosts,
  addPost,
  changePost,
  deletePost, 
  addComment } from "../actions";
import { Post, Comment, CommentData } from '../types';
import { State } from '../reducers';
import { Action } from '../actions/types';
import Router from 'next/router';
import { reset } from 'redux-form';

export const getPostsTC = (): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.getPostsData()
      .then(data => {
        return Promise.all(data.map(({id}) => apiRequests.getComments(id)))  
      })
      .then((posts: any) => dispatch(setPosts(posts))); 
  }

export const addPostTC = (post: Post): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.addPost(post)
      .then(data => dispatch(addPost(data)));
    Router.push("/");
  }

export const changePostTC = (post: Post): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    reset('post')
    await apiRequests.updatePost(post)
    dispatch(changePost(post))
    Router.push('/')
  }

export const deletePostTC = (postId: number): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.deletePost(postId)
    dispatch(deletePost(postId))
  }

export const addCommentTC = (comment: CommentData): ThunkAction<void, State, unknown, Action> => 
  async (dispatch) => {
    await apiRequests.addComment(comment)
      .then(comment => {
        console.log(comment)
        dispatch(addComment(comment))
      });
    reset(`comment_post_${comment.postId}`)
  }
