import { PostsState, initialState } from '../state/posts.state';
import { createReducer, on } from '@ngrx/store';
import { PostsApiActions, PostsPageActions } from '../actions';

export const postsReducer = createReducer<PostsState>(initialState,
  on(PostsPageActions.getPosts, (state, action): PostsState => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  on(PostsApiActions.getPostsSuccess, (state, action): PostsState => {
    return {
      ...state,
      posts: action.postsResponse,
      isLoading: false,
    }
  }),
  on(PostsApiActions.getPostsFailure, (state, action): PostsState => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    }
  }),
  on(PostsPageActions.likePost, (state, action): PostsState => {

    const posts = state.posts.map(post => {
      return action.post.id == post.id ? {
        ...post,
        numberOfLikes: (action.post.isLiked && action.post.numberOfLikes > 0) ? (post.numberOfLikes + 1) : (post.numberOfLikes - 1),
        isLiked: action.post.isLiked
      } : post;
    });

    localStorage.setItem('liked-posts', JSON.stringify(posts.map(post => {
      return {
        id: post.id, isLiked: post.isLiked, numberOfLikes: post.numberOfLikes
      }
    })))

    return {
      ...state,
      posts: [...posts]
    }
  }),
);

