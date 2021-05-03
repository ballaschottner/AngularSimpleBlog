import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostitemComponent } from './postitem/postitem.component';
import { TruncatePipe } from "./truncate.pipe";
import { PostService } from "./post.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    PostsComponent,
    PostitemComponent,
    TruncatePipe
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
})
export class PostsModule { }
