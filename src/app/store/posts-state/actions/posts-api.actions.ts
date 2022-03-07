import { Post } from './../models/post.model';
import { createAction, props } from "@ngrx/store";

export const getPostsSuccess = createAction(
    '[POSTS API] Get Posts Success',
    props<{ postsResponse: Post[] }>()
);

export const getPostsFailure = createAction(
    '[POSTS API] Get Posts Failure',
    props<{ error: Error }>()
);