import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts = [
    // {  title: 'First Post', content: 'this is first posts'},
    // {  title: 'Second Post', content: 'this is first posts'},
    // {  title: 'Third Post', content: 'this is first posts'},
    // {  title: 'Fourth Post', content: 'this is first posts'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
