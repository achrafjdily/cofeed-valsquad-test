import { User } from './../../suggestions-state/models/user.model';

export interface Post {
    id: string;
    user?: User;
    img: string;
    commentsNumber: number;
    isLiked: boolean;
    numberOfLikes: number;
    saves?: number;
    title?: string;
}