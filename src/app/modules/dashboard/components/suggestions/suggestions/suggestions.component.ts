import { Component, OnInit, Input } from '@angular/core';
import { Suggestion } from '../../../../../store/suggestions-state/models/suggestion.model';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  @Input() suggestions: Suggestion[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
