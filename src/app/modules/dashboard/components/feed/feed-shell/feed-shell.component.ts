import { getPosts } from './../../../../../store/posts-state/selectors/posts.selectors';
import { Store } from '@ngrx/store';
import { Post } from './../../../../../store/posts-state/models/post.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PostsPageActions } from '../../../../../store/posts-state/actions';

@Component({
  selector: 'app-feed-shell',
  templateUrl: './feed-shell.component.html',
  styleUrls: ['./feed-shell.component.scss']
})
export class FeedShellComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(getPosts);
  }

  ngOnInit(): void {
    this.store.dispatch(PostsPageActions.getPosts());
  }

  toggleLike(post: Post) {
    this.store.dispatch(PostsPageActions.likePost({ post }));
  }

}
