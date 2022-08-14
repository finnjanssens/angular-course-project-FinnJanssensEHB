import { SearchComponent } from './components/search/search.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { SubredditInfoComponent } from './components/subreddit-info/subreddit-info.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { VotesComponent } from './components/votes/votes.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchComponent,
    SubredditComponent,
    SubredditInfoComponent,
    VotesComponent,
    PostListItemComponent,
  ],
  exports: [
    SearchComponent,
    SubredditComponent,
    SubredditInfoComponent,
    PostListItemComponent,
    VotesComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
