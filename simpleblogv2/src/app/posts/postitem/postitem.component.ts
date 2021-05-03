import {Component, Input, OnInit} from '@angular/core';

export interface Post {
  id: number;
  title: string;
  body: string
}

@Component({
  selector: 'app-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.css']
})
export class PostitemComponent implements OnInit {

  imgLink: string = 'https://picsum.photos/600/200';

  @Input()
  data: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
