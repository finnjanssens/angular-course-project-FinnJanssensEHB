// import { Post, PostDetail, Comment } from '../store/posts/initialState';
import Post from '../models/post.model';
import PostDetail from '../models/postDetail.model';
import Comment from '../models/comment.model';

class RedditService {
  public async getSubredditInfo(subreddit: string) {
    return fetch(
      `https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/r/${subreddit}/about/.json`
    )
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      })
      .catch(function (error) {
        return error;
      });
  }

  public async getSubredditPosts(subreddit: string) {
    return fetch(
      `https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/r/${subreddit}/.json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        return data.data.children;
      })
      .catch(function (error) {
        return error;
      });
  }
}

export const redditService = new RedditService();
