import { HttpErrorResponse } from '@angular/common/http';
import { Story } from '../models/story.model';

const stories: Story[] = [
    {
        user: {
            name: "You",
            img: "https://source.unsplash.com/random/300×300/?user"
        },
        isViewed: true,
    },
    {
        user: {
            name: "Supardi",
            img: "https://source.unsplash.com/random/300×300/?man"
        },
        isViewed: true,
    },
    {
        user: {
            name: "Dean",
            img: "https://source.unsplash.com/random/300×300/?bearded"
        },
        isViewed: true,
    },
    {
        user: {
            name: "Theodore",
            img: "https://source.unsplash.com/random/300×300/?photographer"
        },
        isViewed: false,
    },
    {
        user: {
            name: "Walter",
            img: "https://source.unsplash.com/random/300×300/?player"
        },
        isViewed: false,
    },
    {
        user: {
            name: "Jesse",
            img: "https://source.unsplash.com/random/300×300/?engineer"
        },
        isViewed: false,
    },
    {
        user: {
            name: "Enola",
            img: "https://source.unsplash.com/random/300×300/?soldier"
        },
        isViewed: false,
    },
];

export interface StoriesState {
    stories: Story[];
    isLoading: boolean;
}

export const initialState: StoriesState = {
    stories: stories,
    isLoading: false,
};