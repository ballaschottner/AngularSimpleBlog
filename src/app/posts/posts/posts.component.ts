import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.interface';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  errorMessage = '';

  constructor(private getPost: PostService ) {
  }

  ngOnInit(): void {
    this.getPost.getPost().subscribe(posts => {
      console.log('data', posts);
      this.posts = posts;
    }, errorMsg => {
      this.errorMessage = errorMsg;
  });
  }
}
