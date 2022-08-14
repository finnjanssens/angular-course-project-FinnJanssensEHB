import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Post from 'src/app/core/models/post.model';
import { redditService } from 'src/app/core/services/reddit.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent implements OnInit {
  public posts: Post[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      redditService.getSubredditPosts(params['name']).then((res) => {
        this.posts = res.map((post: any): Post => {
          return {
            id: post.data.id || '',
            is_video: post.data.is_video || false,
            title: post.data.title || '',
            author: post.data.author || '',
            content: post.data.selftext || '',
            thumbnail: post.data.thumbnail || '',
            subreddit: post.data.subreddit,
            created: post.data.created_utc || 0,
            score: post.data.score || 0,
            flair: post.data.link_flair_text || '',
            flair_background_color: post.data.link_flair_background_color || '',
          };
        });
      });
    });
  }
}
