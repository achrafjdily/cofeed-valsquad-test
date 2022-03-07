import { StoriesState, initialState } from '../state/stories.state';
import { createReducer, on } from '@ngrx/store';
import { StoriesPageActions } from '../actions';

export const storiesReducer = createReducer<StoriesState>(initialState,
  on(StoriesPageActions.getStories, (state): StoriesState => {
    return {
      ...state,
      isLoading: true,
    }
  }),
);

