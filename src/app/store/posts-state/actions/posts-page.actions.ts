import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.model";

export const getPosts = createAction(
    '[POSTS PAGE] Get Posts'
);

export const likePost = createAction(
    '[POSTS PAGE] Update Post',
    props<{ post: Post }>()
);