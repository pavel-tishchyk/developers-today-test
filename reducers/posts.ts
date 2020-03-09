import { 
  SET_POSTS, 
  ADD_POST, 
  CHANGE_POST, 
  DELETE_POST, 
  ADD_COMMENT } from "../actions";
import { Action } from "../actions/types";
import { Post, PostState } from "../types";

const initialState = {
  postsData: [],
};

export default function (state: PostState = initialState, action: Action): PostState {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        postsData: action.payload.posts
      }

    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, {...action.payload.post, comments: []}],
      }   
    
    case CHANGE_POST:
      return {
        ...state,
        postsData: state.postsData.map((post: Post) => {
            return post.id !== action.payload.post.id ? post : action.payload.post 
        })
      } 

    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((post: Post) => {
            return post.id !== action.payload.postId ? true : false 
        })
      }

    case ADD_COMMENT:
      return {
        ...state,
        postsData: state.postsData.map((post: Post) => {
            return post.id !== action.payload.comment.postId ? post : {
                ...post, 
                comments: [...post.comments, action.payload.comment]
            } 
        })
      }

    default: 
      return state;
  }
}
