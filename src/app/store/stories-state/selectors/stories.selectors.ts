import { StoriesState } from '../state/stories.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getStoriesFeatureState = createFeatureSelector<StoriesState>('storiesState');

export const getStories = createSelector(
    getStoriesFeatureState,
    state => state.stories
)

export const getStoriesIsLoading = createSelector(
    getStoriesFeatureState,
    state => state.isLoading
)