import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'SimpleBlog';
  slogan = 'This is the best blog you have seen yet!'

  constructor() { }

  ngOnInit(): void {
  }

}
