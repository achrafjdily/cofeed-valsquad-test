import { PostsService } from './../services/posts.service';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { PostsApiActions, PostsPageActions } from '../actions';



@Injectable()
export class PostsEffects {

  constructor(private actions$: Actions, private postsService: PostsService) { }

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsPageActions.getPosts),
      switchMap((action) => this.postsService.getPosts().pipe(
        map(posts => {
          const savedLikes = JSON.parse(localStorage.getItem("liked-posts") || '{}');
          const parsedPosts = posts.map(post => {
            const savedPost = savedLikes.find((saved: any) => saved.id == post._id);
            return {
              id: post._id,
              user: {
                name: post.posterName,
                img: post.posterImage
              },
              img: post.postImage,
              commentsNumber: (Math.floor(Math.random() * 500) + 1),
              isLiked: savedPost.isLiked,
              numberOfLikes: savedPost.numberOfLikes
            }
          })
          return PostsApiActions.getPostsSuccess({ postsResponse: parsedPosts })
        }),
        catchError(error => {
          return of(PostsApiActions.getPostsFailure({ error }));
        })
      ))
    )
  })
}
