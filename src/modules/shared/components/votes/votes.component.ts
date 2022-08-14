import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
})
export class VotesComponent implements OnInit {
  @Input() public votes: number = 0;
  public upvote: boolean = false;
  public downvote: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  upVote() {
    if (!this.upvote && this.downvote) {
      this.votes += 2;
      this.upvote = true;
      this.downvote = false;
    } else if (!this.upvote) {
      this.votes++;
      this.upvote = true;
      this.downvote = false;
    } else {
      this.votes--;
      this.upvote = false;
      this.downvote = false;
    }
    console.log(this.votes);
  }

  downVote() {
    if (!this.downvote && this.upvote) {
      this.votes -= 2;
      this.downvote = true;
      this.upvote = false;
    } else if (!this.downvote) {
      this.votes--;
      this.downvote = true;
      this.upvote = false;
    } else {
      this.votes++;
      this.downvote = false;
      this.upvote = false;
    }
    console.log(this.votes);
  }
}
