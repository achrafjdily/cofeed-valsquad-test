import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    error: Error | HttpErrorResponse | null;
}

export const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: null,
};