import { Story } from './../../../../../store/stories-state/models/story.model';
import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  @Input() stories: Story[] | null;
  faAdd = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
