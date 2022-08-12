export default interface Comment {
  id: string;
  author: string;
  body: string;
  score: number;
  children?: Comment[];
}
