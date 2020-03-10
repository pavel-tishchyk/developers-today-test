import { Action } from "./types";
import { Post, Comment } from "../types";

export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const CHANGE_POST = 'CHANGE_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export const setPosts = (posts: Array<Post>): Action => {
  return {
      type: SET_POSTS,
      payload: { posts }
  }
}

export const addPost = (post: Post): Action => {
  return {
      type: ADD_POST,
      payload: { post }
  }
}

export const changePost = (post: Post): Action => {
  return {
      type: CHANGE_POST,
      payload: { post }
  }
}

export const deletePost = (postId: number): Action => {
  return {
      type: DELETE_POST,
      payload: { postId }
  }
}

export const addComment = (comment: Comment): Action => {
  return {
      type: ADD_COMMENT,
      payload: { comment } 
  }
}
