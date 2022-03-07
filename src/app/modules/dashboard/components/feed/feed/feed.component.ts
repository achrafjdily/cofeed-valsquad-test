import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../../../store/posts-state/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() posts: Post[] | null;
  @Output() toggleLike: EventEmitter<Post> = new EventEmitter<Post>();

  faLike = faHeart;
  faCommentDots = faCommentDots;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLikeClick(post: Post) {
    const mutablePost = { ...post };
    mutablePost.isLiked = !mutablePost.isLiked;
    mutablePost.isLiked ? mutablePost.numberOfLikes++ : mutablePost.numberOfLikes--;
    this.toggleLike.emit(mutablePost);
  }

  identify(index: number, post: Post) {
    return post.id;
  }

}
