import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubredditComponent } from 'src/modules/shared/components/subreddit/subreddit.component';
const routes: Routes = [{ path: 'r/:name', component: SubredditComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
