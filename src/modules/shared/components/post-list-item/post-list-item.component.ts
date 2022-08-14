import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post = {
    id: '',
    is_video: false,
    title: '',
    author: '',
    content: '',
    thumbnail: '',
    subreddit: '',
    created: 0,
    score: 0,
    flair: '',
    flair_background_color: '',
  };

  public redirectUrl: string = ``;

  constructor() {}

  ngOnInit(): void {
    console.log(this.post);
    this.redirectUrl = `https://frontend-reddit-redesign.web.app/r/${this.post.subreddit}/${this.post.id}`;
  }
}
