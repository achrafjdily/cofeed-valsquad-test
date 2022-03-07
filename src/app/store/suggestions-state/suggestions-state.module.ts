import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { suggestionsReducer } from './reducers/suggestions.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('suggestionsState', suggestionsReducer),
  ]
})
export class SuggestionsStateModule { }
