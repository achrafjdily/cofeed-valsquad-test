import { SuggestionsState } from '../state/suggestions.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getSuggestionsFeatureState = createFeatureSelector<SuggestionsState>('suggestionsState');

export const getSuggestions = createSelector(
    getSuggestionsFeatureState,
    state => state.suggestions
)