import { Post } from './../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PostsResponseItem } from '../models/posts-response.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsResponseItem[]> {
    return this.http.get<PostsResponseItem[]>(environment.postsApi);
  }
}
