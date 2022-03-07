import { getSuggestions } from './../../../../../store/suggestions-state/selectors/suggestions.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../../../store/suggestions-state/models/suggestion.model';

@Component({
  selector: 'app-suggestions-shell',
  templateUrl: './suggestions-shell.component.html',
  styleUrls: ['./suggestions-shell.component.scss']
})
export class SuggestionsShellComponent implements OnInit {

  suggestions$: Observable<Suggestion[]>;

  constructor(private store: Store) {
    this.suggestions$ = this.store.select(getSuggestions);
  }

  ngOnInit(): void {
  }

}
