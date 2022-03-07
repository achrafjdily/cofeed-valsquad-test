import { PostsState } from '../state/posts.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPostsFeatureState = createFeatureSelector<PostsState>('postsState');

export const getPosts = createSelector(
    getPostsFeatureState,
    state => state.posts
)

export const getPostsIsLoading = createSelector(
    getPostsFeatureState,
    state => state.isLoading
)

export const getPostsError = createSelector(
    getPostsFeatureState,
    state => state.error
)

export const getLatestPost = createSelector(
    getPostsFeatureState,
    state => state.latestPost
)
