import { SuggestionsState, initialState } from '../state/suggestions.state';
import { createReducer, on } from '@ngrx/store';
import { SuggestionsPageActions } from '../actions';

export const suggestionsReducer = createReducer<SuggestionsState>(initialState,
  on(SuggestionsPageActions.getSuggestions, (state): SuggestionsState => {
    return {
      ...state,
      isLoading: true,
    }
  }),
);

