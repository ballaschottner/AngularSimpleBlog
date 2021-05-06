import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommentComponent } from './comment/comment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsModule } from './posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
