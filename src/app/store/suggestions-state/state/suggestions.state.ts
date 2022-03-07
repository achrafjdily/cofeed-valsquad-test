import { HttpErrorResponse } from '@angular/common/http';
import { Suggestion } from '../models/suggestion.model';

export interface SuggestionsState {
    suggestions: Suggestion[];
    isLoading: boolean;
}

export const initialState: SuggestionsState = {
    suggestions: [],
    isLoading: false,
};