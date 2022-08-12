import Post from './post.model';
import Comment from './comment.model';

export default interface PostDetail {
  post: Post;
  comments: Comment[];
}
