import { User } from './user.model';

export interface Suggestion {
    isFollowed: boolean;
    user: User
}