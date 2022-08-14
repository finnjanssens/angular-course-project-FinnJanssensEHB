import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['name']);
    });
  }
}
