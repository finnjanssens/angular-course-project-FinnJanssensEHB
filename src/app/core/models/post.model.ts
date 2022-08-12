export default interface Post {
  id: string;
  is_video?: boolean;
  video_src?: string;
  title: string;
  author: string;
  content: string;
  thumbnail: string;
  subreddit: string;
  created: number;
  score: number;
  flair: string;
  flair_background_color: string;
  url?: string;
}
