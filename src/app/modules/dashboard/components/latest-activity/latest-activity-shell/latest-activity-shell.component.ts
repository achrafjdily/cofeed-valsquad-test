import { getLatestPost } from './../../../../../store/posts-state/selectors/posts.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../../store/posts-state/models/post.model';

@Component({
  selector: 'app-latest-activity-shell',
  templateUrl: './latest-activity-shell.component.html',
  styleUrls: ['./latest-activity-shell.component.scss']
})
export class LatestActivityShellComponent implements OnInit {

  latestPost$: Observable<Post>;

  constructor(private store: Store) {
    this.latestPost$ = this.store.select(getLatestPost);
  }

  ngOnInit(): void {
  }

}
