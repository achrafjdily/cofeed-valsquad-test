import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    latestPost: Post;
    error: Error | HttpErrorResponse | null;
}

export const initialState: PostsState = {
    posts: [],
    isLoading: false,
    latestPost: {
        id: "azerez",
        img: "https://source.unsplash.com/random/300×300/?stairs",
        commentsNumber: (Math.floor(Math.random() * 500) + 1),
        isLiked: true,
        numberOfLikes: (Math.floor(Math.random() * 500) + 1),
        title: "Minimalist Stairs",
        saves: 0
    },
    error: null,
};