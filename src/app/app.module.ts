import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../modules/layout/components/header/header.component';
import { FooterComponent } from '../modules/layout/components/footer/footer.component';
import { SearchComponent } from '../modules/shared/components/search/search.component';
import { SubredditComponent } from '../modules/shared/components/subreddit/subreddit.component';
import { SubredditInfoComponent } from '../modules/shared/components/subreddit-info/subreddit-info.component';
import { PostListItemComponent } from '../modules/shared/components/post-list-item/post-list-item.component';
import { VotesComponent } from '../modules/shared/components/votes/votes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SubredditComponent,
    SubredditInfoComponent,
    PostListItemComponent,
    VotesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
