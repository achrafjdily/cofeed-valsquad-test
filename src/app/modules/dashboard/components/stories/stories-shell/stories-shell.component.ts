import { Story } from './../../../../../store/stories-state/models/story.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getStories } from '../../../../../store/stories-state/selectors/stories.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-stories-shell',
  templateUrl: './stories-shell.component.html',
  styleUrls: ['./stories-shell.component.scss']
})
export class StoriesShellComponent implements OnInit {

  stories$: Observable<Story[]>;

  constructor(private store: Store) {
    this.stories$ = this.store.select(getStories);
  }

  ngOnInit(): void {
  }

}
