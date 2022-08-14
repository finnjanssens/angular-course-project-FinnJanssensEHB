import { SearchComponent } from './components/search/search.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { SubredditInfoComponent } from './components/subreddit-info/subreddit-info.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent, SubredditComponent, SubredditInfoComponent],
  exports: [
    SearchComponent,
    SubredditComponent,
    SubredditInfoComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
