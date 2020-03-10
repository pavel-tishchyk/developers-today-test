import { Post, Comment } from "../types";
import { SET_POSTS, ADD_POST, CHANGE_POST, DELETE_POST, ADD_COMMENT } from ".";

interface SetPosts {
  type: typeof SET_POSTS
  payload: {
    posts: Array<Post>
  } 
}

interface AddPost {
  type: typeof ADD_POST
  payload: {
    post: Post
  } 
}

interface ChangePost {
  type: typeof CHANGE_POST
  payload: {
    post: Post
  } 
}

interface DeletePost {
  type: typeof DELETE_POST
  payload: {
    postId: number
  } 
}

interface AddComment {
  type: typeof ADD_COMMENT
  payload: {
    comment: Comment
  } 
}

export type Action 
  = SetPosts 
  | AddPost 
  | ChangePost 
  | DeletePost 
  | AddComment
