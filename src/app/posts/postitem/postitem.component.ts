import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.css']
})
export class PostitemComponent implements OnInit {

  imgLink = 'https://picsum.photos/600/200';

  @Input()
  data: Post | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('This is postitem:', this.data);
  }

}
