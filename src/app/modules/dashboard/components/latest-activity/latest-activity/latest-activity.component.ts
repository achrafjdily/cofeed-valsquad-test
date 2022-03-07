import { Post } from './../../../../../store/posts-state/models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { faCommentDots, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-activity',
  templateUrl: './latest-activity.component.html',
  styleUrls: ['./latest-activity.component.scss']
})
export class LatestActivityComponent implements OnInit {

  @Input() latestPost: Post | null;
  faLike = faHeart;
  faCommentDots = faCommentDots;
  faBookmark = faBookmark;
  constructor() { }

  ngOnInit(): void {
  }

}
