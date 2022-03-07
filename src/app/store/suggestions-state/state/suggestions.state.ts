import { HttpErrorResponse } from '@angular/common/http';
import { Suggestion } from '../models/suggestion.model';

const suggestions: Suggestion[] = [
    {
        isFollowed: false,
        user: {
            name: "Sarah Tancredi",
            img: "https://source.unsplash.com/random/300×300/?user",
            username: "dr.sarah"
        },
    },
    {
        isFollowed: true,
        user: {
            name: "Arthur Shelby",
            img: "https://source.unsplash.com/random/300×300/?doctor",
            username: "art.shelby"
        },
    },
    {
        isFollowed: false,
        user: {
            name: "Vin Diesel",
            img: "https://source.unsplash.com/random/300×300/?engineer",
            username: "vindiesel"
        },
    },
]
export interface SuggestionsState {
    suggestions: Suggestion[];
    isLoading: boolean;
}

export const initialState: SuggestionsState = {
    suggestions: suggestions,
    isLoading: false,
};