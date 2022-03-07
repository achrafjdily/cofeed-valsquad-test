import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './reducers/posts.reducer';
import { PostsEffects } from './effects/posts.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('postsState', postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsStateModule { }
