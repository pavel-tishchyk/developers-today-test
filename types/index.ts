export interface PostData {
  title: string
  body: string
}

export interface Post extends PostData {
  id: number
  comments?: Array<Comment>
}

export interface CommentData {
  postId: number
  body: string
}

export interface Comment extends CommentData {
  id: number
}

export interface PostState {
  postsData: Array<Post>
}
