import axios, { AxiosResponse } from "axios";
import { Post, PostData, CommentData } from "../types";

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
});

const apiRequests = {
  getPostsData: async (): Promise<Array<Post>> => (
    await instance.get<Array<Post>, AxiosResponse<Array<Post>>>(`posts`)
      .then(response => response.data)
  ),

  addPost: async (post: PostData): Promise<Post> => (
    await instance.post<PostData, AxiosResponse<Post>>(`posts`, post)
      .then(response => response.data)
  ),

  updatePost: async ({id, ...rest}): Promise<Post> => (
    await instance.put<Post, AxiosResponse<Post>>(`posts/${id}`, rest)
      .then(response => response.data)
  ),

  deletePost: async (postId: number): Promise<{}> => (
    await instance.delete<number, AxiosResponse<{}>>(`posts/${postId}`)
      .then(response => response.data)
  ),

  getComments: async (postId: number): Promise<Post> => (
    await instance.get<number, AxiosResponse<Post>>(`posts/${postId}?_embed=comments`)
      .then(response => response.data)
  ),    

  addComment: async (comment: CommentData): Promise<Comment> => (
    await instance.post<CommentData, AxiosResponse<Comment>>(`comments`, comment)
      .then(response => response.data)
  )
}

export default apiRequests;