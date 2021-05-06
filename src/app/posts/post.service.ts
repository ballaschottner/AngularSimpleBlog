import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  static readonly API_URL = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(PostService.API_URL);
  }

}
