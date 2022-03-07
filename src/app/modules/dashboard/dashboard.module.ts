import { PostsStateModule } from './../../store/posts-state/posts-state.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoriesStateModule } from './../../store/stories-state/stories-state.module';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StoriesShellComponent } from './components/stories/stories-shell/stories-shell.component';
import { StoriesComponent } from './components/stories/stories/stories.component';
import { FeedShellComponent } from './components/feed/feed-shell/feed-shell.component';
import { FeedComponent } from './components/feed/feed/feed.component';


@NgModule({
  declarations: [
    StoriesShellComponent,
    StoriesComponent,
    FeedShellComponent,
    FeedComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoriesStateModule,
    PostsStateModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
